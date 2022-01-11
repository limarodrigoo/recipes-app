import React from 'react';
import Header from '../components/Header';

const DoneRecipes = () => {
  const filterButtons = () => (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </div>
  );

  return (
    <div>
      <Header title="Receitas Feitas" showButton={ false } />
      {filterButtons()}
    </div>
  );
};

export default DoneRecipes;
