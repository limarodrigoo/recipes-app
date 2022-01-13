import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoriteBtn from './FavoriteBtn';
import ShareBtn from './ShareBtn';

export default function FavoriteRecipeCard({ recipe, setHadUpdate, hadUpdate, index }) {
  const {
    type,
    id,
    category,
    alcoholicOrNot,
    area,
    image,
    name,
  } = recipe;
  console.log(`key-${index}`);
  return (
    <div>
      <Link to={ `/${type}s/${id}` }>
        <img
          src={ image }
          alt={ name }
          width="100px"
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <div>
        <div>
          <span data-testid={ `${index}-horizontal-top-text` }>
            {`${(alcoholicOrNot.length > 0) ? alcoholicOrNot : area} - ${category}`}

          </span>
          <Link to={ `/${type}s/${id}` }>
            <span data-testid={ `${index}-horizontal-name` }>
              {name}
            </span>
          </Link>
          <FavoriteBtn
            id={ id }
            type={ type }
            area={ area }
            category={ category }
            alcoholicOrNot={ alcoholicOrNot }
            name={ name }
            image={ image }
            dataTestId={ `${index}-horizontal-favorite-btn` }
            setHadUpdate={ setHadUpdate }
            hadUpdate={ hadUpdate }
          />
          <ShareBtn
            id={ id }
            type={ `${type}s` }
            dataTestId={ `${index}-horizontal-share-btn` }
          />
        </div>
      </div>
    </div>
  );
}

FavoriteRecipeCard.propTypes = {
  recipe: PropTypes.objectOf({
    type: PropTypes.string,
    id: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    area: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  setHadUpdate: PropTypes.func.isRequired,
  hadUpdate: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};
