import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image } from 'react-bootstrap';
import Ingredients from './Ingredients';
import Recomendations from './Recomendations';
import StartRecipeBtn from './StartRecipeBtn';

export default function DrinkDetails(props) {
  const { data } = props;
  return (
    <Container>
      <Image
        src={ data.strDrinkThumb }
        alt="img"
        data-testid="recipe-photo"
        height="300px"
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
      <Recomendations type="drink" />
      <StartRecipeBtn id={ data.idDrink } type="cocktails" />
    </Container>
  );
}

DrinkDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
