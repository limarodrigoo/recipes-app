import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IngredientsContext from './IngredientsContext';

export default function IngredientsProvider({ children }) {
  const INITIAL_STATE = {
    ingredients: '',
  };
  const [ingredient, setIngredient] = useState(INITIAL_STATE);

  const contextValue = {
    ingredient,
    setIngredient,
  };

  return (
    <IngredientsContext.Provider value={ contextValue }>
      { children }
    </IngredientsContext.Provider>
  );
}

IngredientsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
