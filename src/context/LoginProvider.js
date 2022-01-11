import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

export default function LoginProvider({ children }) {
  const INITIAL_STATE = {
    email: '',
    password: '',
    btn: true,
  };

  const [loginInput, setLogin] = useState(INITIAL_STATE);

  const contextValue = {
    loginInput,
    setLogin,
  };

  console.log(contextValue.meals);

  return (
    <LoginContext.Provider value={ contextValue }>
      { children }
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
