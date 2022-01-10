import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

function MealIngredients() {
  const [ categories, setCategories ] = useState([]);
  const getApiIngredients = async () => {
    const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  };
  const requestJson = await request.json();
  set
}
export default MealIngredients;
