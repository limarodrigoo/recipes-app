import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Header from '../components/Header';

describe('1 - testa o Footer', () => {
  test('Possui os botões e o título da página', () => {
    renderWithRouter(<Header />);
    screen.getByText('xdavid');
  });
});
