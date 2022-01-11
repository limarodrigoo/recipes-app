// import React, { useState, useEffect, useCallback } from 'react';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MealIngredients() {
  const [categories, setCategories] = useState([]);
  const NUM_MAX = 12;

  const getApiIngredients = useCallback(async () => {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const requestJson = await request.json();
    setCategories(requestJson.meals);
  }, []);

  useEffect(() => {
    getApiIngredients();
  }, [getApiIngredients]);
  return (
    <>
      <Header />
      {
        categories.slice(0, NUM_MAX).map((element, index) => (
          <Link
            to={ `${index}` }
            key={ index }
          >
            <section
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${element.strIngredient}-Small.png` }
                alt="thumb"
              />
              <h3 data-testid={ `${index}-card-name` }>{element.strIngredient}</h3>
            </section>
          </Link>

        ))
      }
      <Footer />
    </>
  );
}
