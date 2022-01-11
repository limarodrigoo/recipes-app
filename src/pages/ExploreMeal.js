import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';

function ExploreMeal() {
  const [randomMeal, setRandomMeal] = useState({});

  const fetchRandomMeal = async () => {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const requestJson = await request.json();
    setRandomMeal(...requestJson.meals);
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  return (
    <div>
      <Header />
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      </Link>
      <Link to={ `/comidas/${randomMeal.idMeal}` }>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>
    </div>
  );
}

export default ExploreMeal;
