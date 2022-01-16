import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FavoriteBtn({ id,
  type, area, category,
  alcoholicOrNot, name, image, dataTestId, setHadUpdate, hadUpdate }) {
  const { location: { pathname } } = useHistory();
  const allFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const checkFavorite = () => {
    if (allFavorites) {
      return allFavorites.some((recipes) => id === recipes.id);
    }
    return false;
  };

  const [isFavorite, setisFavorite] = useState(checkFavorite());

  const setFavoriteOrNot = () => {
    const currentRecipe = {
      id,
      type,
      area,
      category,
      alcoholicOrNot,
      name,
      image,
    };
    // se não tiver nada no localStorage
    if (allFavorites === null) {
      setisFavorite(true);
      return localStorage.setItem('favoriteRecipes', JSON.stringify([currentRecipe]));
    }
    if (isFavorite === false && allFavorites) {
      setisFavorite(true);
      const newArrayofFavorites = [...allFavorites, currentRecipe];
      return localStorage.setItem('favoriteRecipes', JSON.stringify(newArrayofFavorites));
    }
    if (setHadUpdate) {
      setHadUpdate(!hadUpdate);
    }
    if (pathname !== '/receitas-favoritas') {
      setisFavorite(false);
    }
    const newArrayofFavorites = allFavorites.filter((recipes) => recipes.id !== id);
    return localStorage.setItem('favoriteRecipes', JSON.stringify(newArrayofFavorites));
  };

  return (
    <button
      type="button"
      data-testid={ dataTestId }
      onClick={ setFavoriteOrNot }
      src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
    >
      <img
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt="favorite-icon"
      />
    </button>
  );
}

FavoriteBtn.defaultProps = {
  area: '',
  category: '',
  alcoholicOrNot: '',
};

FavoriteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  area: PropTypes.string,
  category: PropTypes.string,
  alcoholicOrNot: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  setHadUpdate: PropTypes.func.isRequired,
  hadUpdate: PropTypes.bool.isRequired,
};
