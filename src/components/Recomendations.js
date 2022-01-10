import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecomendationCarousel from './RecomendationCarousel';

export default function Recomendations({ type }) {
  const [recomendationsData, setrecomendationsData] = useState();
  const [link, setlink] = useState('');

  useEffect(() => {
    if (type === 'meal') {
      setlink('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    } else {
      setlink('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    }
  }, [type]);
  useEffect(() => {
    async function fetchData() {
      const detailsResponse = await fetch(link);
      const recomendations = await detailsResponse.json();
      setrecomendationsData(recomendations);
    }
    fetchData();
  }, [link]);
  return (
    <div>
      <h4>Recomendações</h4>
      {recomendationsData ? (
        <div style={ { display: 'block', width: 700, padding: 30 } }>
          <RecomendationCarousel data={ recomendationsData } limit={ 6 } />
        </div>
      ) : null}
    </div>
  );
}

Recomendations.propTypes = {
  type: PropTypes.string.isRequired,
};
