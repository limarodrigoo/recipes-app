import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import IngredientsContext from '../context/IngredientsContext';
import Header from '../components/Header';
import '../css/InitialPage.css';

function initialMeals(mealsData) {
  const { meals } = mealsData;
  const limitMeals = 12;

  if (meals) {
    return (
      <div className="divItems">
        {meals.map((meal, index) => (
          <Link to={ `/comidas/${meal.idMeal}` } key={ meal.idMeal }>
            <div
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
      </div>
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

  const { ingredient } = useContext(IngredientsContext);

  useEffect(() => {
    async function fetchData() {
      // debugger;
      if (ingredient) {
        const INGREDIENTS = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        const data = await fetch(INGREDIENTS);
        const ingredientData = await data.json();
        setmealsData(ingredientData);
      } else {
        const mealResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const mealData = await mealResponse.json();
        setmealsData(mealData);
      }
      const categoryResponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const categoryData = await categoryResponse.json();
      setCategoriesMealsData(categoryData);
    }
    fetchData();
  }, [ingredient]);

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
        <div className="header">
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
        </div>
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
