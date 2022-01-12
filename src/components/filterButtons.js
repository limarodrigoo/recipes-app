import React, { useState } from 'react';

const filterButtons = (setState) => {
  const handleClick = ({ target }) => {
    const { name } = target;
    setState(name);
  };

  const result = (
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
    </div>);
  return [result];
};

export default filterButtons;
