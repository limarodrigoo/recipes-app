import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image } from 'react-bootstrap';
import Ingredients from './Ingredients';
import Recomendations from './Recomendations';
import StartRecipeBtn from './StartRecipeBtn';
import FavoriteBtn from './FavoriteBtn';
import ShareBtn from './ShareBtn';

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
      <Container>
        <div className="buttons-details">
          <FavoriteBtn
            className="align-items-center"
            id={ data.idDrink }
            type="bebida"
            category={ data.strCategory }
            alcoholicOrNot={ data.strAlcoholic }
            name={ data.strDrink }
            image={ data.strDrinkThumb }
            dataTestId="favorite-btn"
          />
          <ShareBtn
            id={ data.idDrink }
            type="bebidas"
            dataTestId="share-btn"
            className="align-items-center"
          />
        </div>
      </Container>
    </Container>
  );
}

DrinkDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
