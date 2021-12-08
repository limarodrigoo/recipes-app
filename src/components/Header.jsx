import { render } from '@testing-library/react';
import React from 'react';

function Header() {
  render();
  return (
    <header className="header-container">
      <button type="button" data-testid="profile-top-btn">Perfil</button>
      <h1 data-testid="page-title">Comidas</h1>
      <button type="button" data-testid="search-top-btn">Buscar</button>
    </header>
  );
}

export default Header;
