import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/InitialPage.css';
import Header from '../components/Header';

function initialDrinks(drinksData) {
  const { drinks } = drinksData;
  const limitDrinks = 12;
  if (drinks) {
    return (
      <>
        {drinks.map((drink, index) => (
          <Link to={ `/bebidas/${drink.idDrink}` } key={ drink.idDrink }>
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
          </Link>
        )).filter((drinkFilter, index) => index < limitDrinks)}
      </>
    );
  }
}

function DrinkPage() {
  const [drinksData, setdrinksData] = useState([]);
  const [categoriesDrinksData, setCategoriesDrinksData] = useState([]);
  const [renderDrinksCategoryData, setRenderDrinksCategoryData] = useState([]);
  const [categoryResult, setCategoryResult] = useState([]);
  const [renderCategoryResult, setRenderCategoryResult] = useState(false);
  const [renderAllCategories, setRenderAllCategories] = useState(false);

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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${renderDrinksCategoryData}`);
      const data = await response.json();
      setCategoryResult(data);
    }
    fetchData();
  }, [renderDrinksCategoryData]);

  function renderCategory(category) {
    if (category === renderDrinksCategoryData) {
      setRenderCategoryResult(!renderCategoryResult);
    } else {
      setRenderDrinksCategoryData(category);
      setRenderCategoryResult(true);
    }
  }

  function renderAllCategoriesDrinks() {
    return (
      <>
        {initialDrinks(drinksData)}
      </>
    );
  }

  function buttonsCategoriesDrinks() {
    const limitbuttons = 5;
    const { drinks } = categoriesDrinksData;
    if (drinks) {
      return (
        <div className='header'>
          {drinks.map((category) => (
            <button
              type="button"
              key={ category.strCategory }
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ () => { renderCategory(category.strCategory); } }
            >
              { category.strCategory }
            </button>
          )).filter((categoryFilter, index) => index < limitbuttons)}
          <button
            type="button"
            data-testid="All-category-filter"
            onClick={ () => {
              renderAllCategoriesDrinks(); setRenderAllCategories(!renderAllCategories);
            } }
          >
            All
          </button>
        </div>
      );
    }
  }

  if (renderAllCategories) {
    return (
      <div className='divItems'>
        <Header title="Comidas" showButton />
        {buttonsCategoriesDrinks()}
        {renderAllCategoriesDrinks()}
      </div>
    );
  }
  return (
    <div className='divItems'>
      <Header title="Bebidas" showButton />
      {buttonsCategoriesDrinks()}
      {renderCategoryResult ? initialDrinks(categoryResult) : initialDrinks(drinksData)}
    </div>
  );
}

export default DrinkPage;
