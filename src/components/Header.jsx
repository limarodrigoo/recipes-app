import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/InitialPage.css';
import SearchBar from './SearchBar';

function Header({ title, showButton }) {
  const [showSearchBar, setSearchBar] = useState(false);

  const handleClick = () => {
    setSearchBar(!showSearchBar);
  };

  return (
    <header>
      {/* // className="header-container" style={ { display: 'flex' } } */}
      <Link to="/perfil">
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
      </Link>
      <h1 data-testid="page-title">{ title }</h1>
      { showButton && (
        <button
          type="button"
          data-testid="search-top-btn"
          src={ searchIcon }
          onClick={ handleClick }
        >
          <object
            type="image/svg+xml"
            data={ searchIcon }
          >
            Buscar
          </object>
        </button>) }
      { showSearchBar && <SearchBar /> }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showButton: PropTypes.bool.isRequired,
};

export default Header;
