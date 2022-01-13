import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import IngredientsContext from '../context/IngredientsContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DrinkIngredients() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const NUM_MAX = 12;

  const getApiIngredients = useCallback(async () => {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const requestJson = await request.json();
    setCategories(requestJson.drinks);
  }, []);

  const { setIngredient } = useContext(IngredientsContext);

  const setIngredientHistory = (element) => {
    console.log(element);
    setIngredient(element.strIngredient1);
    history.push('/bebidas');
  };

  useEffect(() => {
    getApiIngredients();
  }, [getApiIngredients]);

  return (
    <div>
      <Header />

      {
        categories.slice(0, NUM_MAX).map((element, index) => (
          <button
            type="button"
            to="/bebidas"
            key={ index }
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => setIngredientHistory(element) }
          >
            <div>
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${element.strIngredient1}-Small.png` }
                alt="thumb"
              />
              <h3 data-testid={ `${index}-card-name` }>{element.strIngredient1}</h3>
            </div>
          </button>

        ))
      }
      <Footer />
    </div>
  );
}
