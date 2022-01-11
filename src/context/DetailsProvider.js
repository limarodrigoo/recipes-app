import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DetailsContext from './DetailsContext';

export default function DetailsProvider({ children }) {
  const INITIAL_STATE = [{ }];

  const [mealDetails, setmealDetails] = useState(INITIAL_STATE);

  const contextValue = { mealDetails, setmealDetails };
  return (
    <DetailsContext.Provider value={ contextValue }>
      { children }
    </DetailsContext.Provider>
  );
}

DetailsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
