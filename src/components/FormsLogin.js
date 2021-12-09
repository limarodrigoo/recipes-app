import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

export default function FormsLogin() {
  const { loginInput, setLogin } = useContext(LoginContext);

  const validateLogin = (newInput) => {
    const { email, password } = newInput;
    const maxLength = 6;
    const validatePassword = password.length > maxLength;
    const validateEmail = /.+@.+\.com/i.test(email);
    if (validateEmail && validatePassword) {
      newInput.btn = !newInput.btn;
      setLogin(newInput);
    }
  };

  const handleInputChange = ({ target: { value, id } }) => {
    const newInput = { ...loginInput };
    newInput[id] = value;
    setLogin(newInput);
    validateLogin(newInput);
  };

  const saveLocalStorage = () => {
    const user = { email: loginInput.email };
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(user));
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
        value={ loginInput.password }
      />
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          onClick={ saveLocalStorage }
          disabled={ loginInput.btn }
        >
          Entrar

        </button>
      </Link>
    </form>
  );
}
