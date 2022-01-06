import React from 'react';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
import Recomendations from './Recomendations';

export default function MealDetails(props) {
  const { data } = props;

  // Regex feito seguindo sugestao de resposta do stack overflow https://stackoverflow.com/questions/21607808/convert-a-youtube-video-url-to-embed-code/21607897

  function getVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }

  const videoId = getVideoId(data.strYoutube);
  const embedUrl = `//www.youtube.com/embed/${videoId}`;

  return (
    <>
      <img
        src={ data.strMealThumb }
        alt="img"
        data-testid="recipe-photo"
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
      <Recomendations />
    </>
  );
}

MealDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
