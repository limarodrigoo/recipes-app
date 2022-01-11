import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function StartRecipeBtn({ id, type }) {
  const [recipeDone, setrecipeDone] = useState(false);
  const [inProgress, setinProgress] = useState(false);
  const [typeRecipe, settypeRecipe] = useState('');

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  console.log(inProgressRecipes);
  useEffect(() => {
    if (doneRecipes) {
      const idDoneRecipes = doneRecipes.map((recipe) => recipe.id);
      if (idDoneRecipes.includes(id)) {
        setrecipeDone(true);
      }
    }
  }, [doneRecipes, id]);

  useEffect(() => {
    if (inProgressRecipes) {
      const idInProgressRecipes = Object.keys(inProgressRecipes[type]);
      if (idInProgressRecipes.includes(id)) {
        setinProgress(true);
      }
    }
  }, [inProgressRecipes, id, type]);

  useEffect(() => {
    if (type === 'meals') {
      settypeRecipe('comidas');
    } else {
      settypeRecipe('bebidas');
    }
  }, [type]);

  const handleClick = () => {
    setrecipeDone(!recipeDone);
  };

  const recipeState = () => {
    if (recipeDone) {
      return null;
    }
    if (inProgress) {
      return (
        <Button
          className="flex-fill fixed-bottom d-flex"
          variant="dark"
          onClick={ handleClick }
          data-testid="start-recipe-btn"

        >
          Continuar Receita
        </Button>
      );
    }
    return (
      <Link to={ `/${typeRecipe}/${id}/in-progress` }>
        <Button
          className="flex-fill fixed-bottom d-flex"
          variant="dark"
          onClick={ handleClick }
          data-testid="start-recipe-btn"

        >
          Iniciar Receita
        </Button>
      </Link>
    );
  };
  return (
    <div className="flex-fill">
      {recipeState()}
    </div>
  );
}

StartRecipeBtn.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
