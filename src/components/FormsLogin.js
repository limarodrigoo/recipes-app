import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';

export default function FormsLogin() {
  const { loginInput, setLogin } = useContext(LoginContext);

  const validateLogin = () => {
    const { email, password } = loginInput;
    const maxLength = 5;
    const validateEmail = /.+@.+\.com/i.test(email);
    if (validateEmail && password.length > maxLength) {
      const newInput = { ...loginInput };
      newInput.btn = false;
      setLogin(newInput);
    }
  };

  const handleInputChange = ({ target: { value, id } }) => {
    const newInput = { ...loginInput };
    newInput[id] = value;
    setLogin(newInput);
    validateLogin();
  };

  return (
    <form>
      <input
        type="email"
        id="email"
        data-testid="email-input"
        placeholder="email"
        onChange={ handleInputChange }
        value={ loginInput.email }
      />
      <input
        type="password"
        id="password"
        data-testid="password-input"
        placeholder="senha"
        onChange={ handleInputChange }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ loginInput.btn }
      >
        Entrar

      </button>
    </form>
  );
}
