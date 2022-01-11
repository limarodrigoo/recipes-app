import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image } from 'react-bootstrap';
import Ingredients from './Ingredients';
import Recomendations from './Recomendations';
import StartRecipeBtn from './StartRecipeBtn';
import FavoriteBtn from './FavoriteBtn';

export default function MealDetails({ data }) {
  // Regex feito seguindo sugestao de resposta do stack overflow https://stackoverflow.com/questions/21607808/convert-a-youtube-video-url-to-embed-code/21607897

  function getVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const maxIdLength = 11;

    return (match && match[2].length === maxIdLength)
      ? match[2]
      : null;
  }

  const videoId = getVideoId(data.strYoutube);
  const embedUrl = `//www.youtube.com/embed/${videoId}`;

  return (
    <Container>
      <Image
        src={ data.strMealThumb }
        alt="img"
        data-testid="recipe-photo"
        height="300px"
      />
      <h3 data-testid="recipe-title">
        {' '}
        {`${data.strMeal}`}
        {' '}
      </h3>
      <h4 data-testid="recipe-category">
        {data.strCategory}
      </h4>
      <Ingredients data={ data } />
      <p data-testid="instructions">
        {' '}
        {data.strInstructions}
      </p>
      <iframe
        data-testid="video"
        title={ data.strMeal }
        src={ embedUrl }
      />
      <Recomendations type="meal" />
      <StartRecipeBtn id={ data.idMeal } type="meals" />
      <FavoriteBtn
        id={ data.idMeal }
        type="comida"
        area={ data.strArea }
        category={ data.strCategory }
        alcoholicOrNot=""
        name={ data.strMeal }
        image={ data.strMealThumb }
      />
    </Container>
  );
}

MealDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
