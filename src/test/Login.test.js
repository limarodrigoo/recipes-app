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
