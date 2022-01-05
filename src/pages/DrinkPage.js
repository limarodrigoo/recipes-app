import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function initialDrinks(drinksData) {
  const { drinks } = drinksData;
  const limitDrinks = 12;
  if (drinks) {
    return (
      <>
        {drinks.map((drink, index) => (
          <div
            key={ drink.idDrink }
            data-testid={ `${index}-recipe-card` }
          >
            <h3
              data-testid={ `${index}-card-name` }
            >
              {drink.strDrink}
            </h3>
            <img
              data-testid={ `${index}-card-img` }
              src={ drink.strDrinkThumb }
              alt=""
            />
          </div>
        )).filter((drinkFilter, index) => index < limitDrinks)}
      </>
    );
  }
}

function buttonsCategoriesDrinks(categoriesData) {
  const limitbuttons = 5;
  const { drinks } = categoriesData;
  if (drinks) {
    return (
      <>
        {drinks.map((categorie) => (
          <button
            type="button"
            key={ categorie.strCategory }
            data-testid={ `${categorie.strCategory}-category-filter` }
          >
            { categorie.strCategory }
          </button>
        )).filter((categorieFilter, index) => index < limitbuttons)}
      </>
    );
  }
}

function DrinkPage() {
  const [drinksData, setdrinksData] = useState([]);
  const [categoriesDrinksData, setCategoriesDrinksData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const drinksResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const drinkData = await drinksResponse.json();
      setdrinksData(drinkData);
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const categorieData = await response.json();
      setCategoriesDrinksData(categorieData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header title="Bebidas" showButton />
      {buttonsCategoriesDrinks(categoriesDrinksData)}
      {initialDrinks(drinksData)}
    </div>
  );
}

export default DrinkPage;
