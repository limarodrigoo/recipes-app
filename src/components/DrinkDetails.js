import React from 'react';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
import Recomendations from './Recomendations';

export default function DrinkDetails(props) {
  const { data } = props;
  return (
    <>
      <img
        src={ data.strDrinkThumb }
        alt="img"
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">
        {' '}
        {`${data.strDrink}`}
        {' '}
      </h3>
      <h4 data-testid="recipe-category">{data.strAlcoholic}</h4>
      <Ingredients data={ data } />
      <p data-testid="instructions">
        {' '}
        {data.strInstructions}
      </p>
      <Recomendations />

    </>
  );
}

DrinkDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
