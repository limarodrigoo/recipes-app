import React from 'react';

function SearchBar() {
  return (
    <form>
      <input
        type="text"
        data-testid="search-input"
      />
      <button type="button">Buscar</button>
    </form>
  );
}

export default SearchBar;
