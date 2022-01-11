import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';

function ExploreDrink() {
  const [randomDrink, setRandomDrink] = useState({});
  const getApi = useCallback(async () => {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const requestJson = await request.json();
    setRandomDrink(requestJson.drinks);
  }, []);
  useEffect(() => {
    getApi();
  });

  return (
    <>

      <Header />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to={ `/bebidas/${randomDrink.idDrink}` }>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>
    </>
  );
}
export default ExploreDrink;
