import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import treatsRecipeDone from '../services';
import FoodCards from '../components/doneRecipes/FoodCards';

const DoneRecipes = () => {
  const [recipesDone, setRecipesDone] = useState();
  const [typeChosen, setTypeChosen] = useState('all');

  useEffect(() => {
    if (recipesDone === undefined) setRecipesDone(treatsRecipeDone());
  }, [recipesDone]);

  const handleClick = ({ target }) => {
    const { name } = target;
    setTypeChosen(name);
  };

  const filterButtons = () => (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        name="all"
        onClick={ handleClick }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        name="comida"
        onClick={ handleClick }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        name="bebida"
        onClick={ handleClick }
      >
        Drinks
      </button>
    </div>
  );

  const cardConstFood = (<FoodCards
    recipeObj={ recipesDone }
    filterChosen={ typeChosen }
  />);

  return (
    <div>
      <Header title="Receitas Feitas" showButton={ false } />
      {filterButtons()}
      {recipesDone !== undefined
        ? cardConstFood
        : null}
    </div>
  );
};

export default DoneRecipes;
