import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './testConfig';

describe('2- Crie todos os elementos para a tela de login',
  () => {
    test('Verifica existência dos inputs necessários', () => {
      renderWithRouter(<App />);

      const email = screen.getByTestId('email-input');
      const senha = screen.getByTestId('password-input');
      const btn = screen.getByTestId('login-submit-btn');

      expect(email).toBeInTheDocument();
      expect(senha).toBeInTheDocument();
      expect(btn).toBeInTheDocument();
    });
  });
describe('3- Checa a possibilidade de escrever email no campo correspondente',
  () => {
    test('Verifica funcionalidade do input  de email', () => {
      renderWithRouter(<App />);

      const email = screen.getByTestId('email-input');

      userEvent.type(email, 'email@teste.com');
      expect(email).toBeInTheDocument();
      expect(email.value).toBe('email@teste.com');
    });
  });
describe('4- Checa a possibilidade de escrever a senha no campo correspondente', () => {
  test('Verifica funcionalidade do input  de email', () => {
    renderWithRouter(<App />);

    const password = screen.getByTestId('password-input');

    userEvent.type(password, '123456');
    expect(password).toBeInTheDocument();
    expect(password.value).toBe('123456');
  });
});
describe('5- Verifica funcionamento do botão', () => {
  test('Verifica se o botão está habilitado', () => {
    renderWithRouter(<App />);

    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');

    userEvent.type(email, 'email@teste.com');
    userEvent.type(password, '123456');

    expect(email).toBeInTheDocument();
    expect(email.value).toBe('email@teste.com');

    expect(password).toBeInTheDocument();
    expect(password.value).toBe('123456');
  });
});
