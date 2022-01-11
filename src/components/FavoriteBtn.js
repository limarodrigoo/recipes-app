import React, { useState } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FavoriteBtn({ id,
  type, area, category, alcoholicOrNot, name, image, dataTestId }) {
  const allFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const checkFavorite = () => {
    if (allFavorites) {
      return allFavorites.some((recipes) => id === recipes.id);
    }
    return false;
  };

  const [isFavorite, setisFavorite] = useState(checkFavorite());
  console.log(allFavorites);

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
    console.log(currentRecipe);
    console.log(allFavorites);
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
    setisFavorite(false);
    const newArrayofFavorites = allFavorites.filter((recipes) => recipes.id !== id);
    console.log(newArrayofFavorites);
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
};
