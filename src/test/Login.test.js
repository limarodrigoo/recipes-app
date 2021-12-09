import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './testConfig';

const DATA_EMAIL = 'email-input';
const DATA_PASSWORD = 'password-input';
const DATA_BTN = 'login-submit-btn';
const CORRECT_EMAIL = 'email@teste.com';
const CORRECT_PW = '123456';

describe('2- Crie todos os elementos para a tela de login',
  () => {
    test('Verifica existência dos inputs necessários', () => {
      renderWithRouter(<App />);

      const email = screen.getByTestId(DATA_EMAIL);
      const senha = screen.getByTestId(DATA_PASSWORD);
      const btn = screen.getByTestId(DATA_BTN);

      expect(email).toBeInTheDocument();
      expect(senha).toBeInTheDocument();
      expect(btn).toBeInTheDocument();
    });
  });
describe('3- Checa a possibilidade de escrever email no campo correspondente',
  () => {
    test('Verifica funcionalidade do input  de email', () => {
      renderWithRouter(<App />);

      const email = screen.getByTestId(DATA_EMAIL);

      userEvent.type(email, CORRECT_EMAIL);
      expect(email).toBeInTheDocument();
      expect(email.value).toBe(CORRECT_EMAIL);
    });
  });
describe('4- Checa a possibilidade de escrever a senha no campo correspondente', () => {
  test('Verifica funcionalidade do input  de email', () => {
    renderWithRouter(<App />);

    const password = screen.getByTestId(DATA_PASSWORD);

    userEvent.type(password, CORRECT_PW);
    expect(password).toBeInTheDocument();
    expect(password.value).toBe(CORRECT_PW);
  });
});
describe('5- Verifica funcionamento do botão', () => {
  test('Verifica se o botão está habilitado', () => {
    renderWithRouter(<App />);

    const email = screen.getByTestId(DATA_EMAIL);
    const password = screen.getByTestId(DATA_PASSWORD);
    const btn = screen.getByTestId(DATA_BTN);

    userEvent.type(email, CORRECT_EMAIL);
    userEvent.type(password, '12345');

    expect(email).toBeInTheDocument();
    expect(email.value).toBe(CORRECT_EMAIL);

    expect(password).toBeInTheDocument();
    expect(password.value).toBe('12345');

    expect(btn).toBeDisabled();
  });
});
describe('8- Verifica funcionamento do botão', () => {
  test('Verifica se o botão está redirecionando corretamente', () => {
    const { history } = renderWithRouter(<App />);

    const email = screen.getByTestId(DATA_EMAIL);
    const password = screen.getByTestId(DATA_PASSWORD);
    const btn = screen.getByTestId(DATA_BTN);

    userEvent.type(email, CORRECT_EMAIL);
    userEvent.type(password, CORRECT_PW);

    expect(email).toBeInTheDocument();
    expect(email.value).toBe(CORRECT_EMAIL);

    expect(password).toBeInTheDocument();
    expect(password.value).toBe(CORRECT_PW);

    userEvent.click(btn);

    expect(history.location.pathname).toBe('/comidas');
  });
});
