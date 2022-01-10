import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/InitialPage.css';
import Header from '../components/Header';

function initialMeals(mealsData) {
  const { meals } = mealsData;
  const limitMeals = 12;

  if (meals) {
    return (
      <>
        {meals.map((meal, index) => (
          <Link to={ `/comidas/${meal.idMeal}` } key={ meal.idMeal }>
            <div
              className="div"
              key={ meal.idMeal }
              data-testid={ `${index}-recipe-card` }
            >
              <h3
                data-testid={ `${index}-card-name` }
              >
                {meal.strMeal}
              </h3>
              <img
                data-testid={ `${index}-card-img` }
                src={ meal.strMealThumb }
                alt=""
              />
            </div>
          </Link>
        )).filter((mealFilter, index) => index < limitMeals)}
      </>
    );
  }
}

function MealPage() {
  const [mealsData, setmealsData] = useState([]);
  const [categoriesMealsData, setCategoriesMealsData] = useState([]);
  const [renderMealsCategoryData, setRenderMealsCategoryData] = useState([]);
  const [categoryResult, setCategoryResult] = useState([]);
  const [renderCategoryResult, setRenderCategoryResult] = useState(false);
  const [renderAllCategories, setRenderAllCategories] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const mealResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const mealData = await mealResponse.json();
      setmealsData(mealData);
      const categoryResponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const categoryData = await categoryResponse.json();
      setCategoriesMealsData(categoryData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${renderMealsCategoryData}`);
      const data = await response.json();
      setCategoryResult(data);
    }
    fetchData();
  }, [renderMealsCategoryData]);

  function renderCategory(category) {
    if (category === renderMealsCategoryData) {
      setRenderCategoryResult(!renderCategoryResult);
    } else {
      setRenderMealsCategoryData(category);
      setRenderCategoryResult(true);
    }
  }

  function renderAllCategoriesMeals() {
    return (
      <>
        {initialMeals(mealsData)}
      </>
    );
  }

  function buttonsCategoriesMeals() {
    const limitbuttons = 5;
    const { meals } = categoriesMealsData;
    if (meals) {
      return (
        <>
          {meals.map((category) => (
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
              renderAllCategoriesMeals(); setRenderAllCategories(!renderAllCategories);
            } }
          >
            All
          </button>
        </>
      );
    }
  }

  if (renderAllCategories) {
    return (
      <div>
        <Header title="Comidas" showButton />
        {buttonsCategoriesMeals()}
        {renderAllCategoriesMeals()}
      </div>
    );
  }
  return (
    <div>
      <Header title="Comidas" showButton />
      {buttonsCategoriesMeals()}
      {renderCategoryResult ? initialMeals(categoryResult) : initialMeals(mealsData)}
    </div>
  );
}

export default MealPage;
