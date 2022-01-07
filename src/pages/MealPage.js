import React, { useEffect, useState } from 'react';
import '../css/InitialPage.css';
import Header from '../components/Header';

function initialMeals(mealsData) {
  const { meals } = mealsData;
  const limitMeals = 12;

  if (meals) {
    return (
      <>
        {meals.map((meal, index) => (
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
  const [renderInitialMeals, setRenderInitialMeals] = useState(true);

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
    }
    setRenderMealsCategoryData(category);
  }

  function buttonsCategoriesDrinks() {
    const limitbuttons = 5;
    const { meals } = categoriesMealsData;
    console.log(categoryResult);
    console.log(renderMealsCategoryData);
    if (meals) {
      return (
        <>
          {meals.map((category) => (
            <button
              type="button"
              key={ category.strCategory }
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ () => { renderCategory(category.strCategory); setRenderInitialMeals(false); } }
            >
              { category.strCategory }
            </button>
          )).filter((categorieFilter, index) => index < limitbuttons)}
        </>
      );
    }
  }

  return (
    <div>
      <Header title="Comidas" showButton />
      {buttonsCategoriesDrinks()}
      {renderCategoryResult ? initialMeals(categoryResult) : initialMeals(mealsData)}

    </div>
  );
}

export default MealPage;
