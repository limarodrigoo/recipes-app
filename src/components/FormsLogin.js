import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';

export default function FormsLogin() {
  const { loginInput, setLogin } = useContext(LoginContext);

  const validateLogin = (newInput) => {
    const { email, password } = newInput;
    const maxLength = 6;
    const validatePassword = password.length >= maxLength;
    console.log(password.length);
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
