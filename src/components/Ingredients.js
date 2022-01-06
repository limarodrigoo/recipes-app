import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients(props) {
  const { data } = props;
  const ingredients = [];
  const maxIngredients = 20;
  for (let i = 1; i <= maxIngredients; i += 1) {
    const indexIngredient = `strIngredient${i}`;
    const indexMeasure = `strMeasure${i}`;
    const ingredient = data[indexIngredient];
    const measure = data[indexMeasure];
    if (ingredient !== '' && ingredient !== null) {
      ingredients.push([ingredient, measure]);
    }
  }
  return (
    <ol>
      {ingredients.map((ingredient, index) => (
        <li
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          {' '}
          {ingredient[0]}
          -
          {ingredient[1]}
        </li>))}
    </ol>
  );
}

Ingredients.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
