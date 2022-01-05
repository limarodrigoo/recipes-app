import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function initialMeals(mealsData) {
  const { meals } = mealsData;
  const limitDrinks = 12;

  if (meals) {
    return (
      <>
        {meals.map((meal, index) => (
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
        )).filter((mealFilter, index) => index < limitDrinks)}
      </>
    );
  }
}

function buttonsCategoriesDrinks(categoriesData) {
  const limitbuttons = 5;
  const { meals } = categoriesData;
  if (meals) {
    return (
      <>
        {meals.map((categorie) => (
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

function MealPage() {
  const [mealsData, setmealsData] = useState([]);
  const [categoriesMealsData, setCategoriesMealsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const mealResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const mealData = await mealResponse.json();
      setmealsData(mealData);
      const categorieResponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const categorieData = await categorieResponse.json();
      setCategoriesMealsData(categorieData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header title="Comidas" showButton />
      {buttonsCategoriesDrinks(categoriesMealsData)}
      {initialMeals(mealsData)}
    </div>
  );
}

export default MealPage;
