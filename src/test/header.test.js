import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Header from '../components/Header';

describe('9 - Header implementado na tela principal de Receitas', () => {
  test('Possui os botões e o título da página', () => {
    renderWithRouter(<Header />);
    const profileBtn = screen.getByTestId('profile-top-btn');
    const pageHeading = screen.getByTestId('page-title');
    const searchBtn = screen.getByTestId('search-top-btn');

    expect(profileBtn).toBeInTheDocument();
    expect(pageHeading).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });
});
