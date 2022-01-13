import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import FilterButtons from '../components/FilterButtons';
import { arrRecipesFilter } from '../services';

function FavoriteMeals() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [hadUpdate, setHadUpdate] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteRecipes(savedFavorites);
  }, [hadUpdate]);

  useEffect(() => {
    const arrRecipes = arrRecipesFilter(favoriteRecipes, filter);
    setFilteredRecipes(arrRecipes);
  }, [favoriteRecipes, filter]);

  return (
    <div>
      <Header title="Receitas Favoritas" />
      <FilterButtons setState={ setFilter } />
      { (filteredRecipes) ? (filteredRecipes.map((recipe, index) => (
        <FavoriteRecipeCard
          recipe={ recipe }
          key={ index }
          index={ index }
          setHadUpdate={ setHadUpdate }
          hadUpdate={ hadUpdate }
        />
      ))) : null }
    </div>
  );
}

export default FavoriteMeals;
