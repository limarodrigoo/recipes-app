import { render } from '@testing-library/react';
import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/InitialPage.css';

function Header({ title, showButton }) {
  render();
  return (
    <header className="header">
      <button
        type="button"
        data-testid="profile-top-btn"
        src={ profileIcon }
      >
        <object
          type="image/svg+xml"
          data={ profileIcon }
        >
          Perfil
        </object>
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      { showButton && (
        <button
          type="button"
          data-testid="search-top-btn"
          src={ searchIcon }
        >
          <object
            type="image/svg+xml"
            data={ searchIcon }
          >
            Buscar
          </object>
        </button>) }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showButton: PropTypes.bool.isRequired,
};

export default Header;
