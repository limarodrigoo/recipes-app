import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MealDetails from '../components/MealDetails';

export default function MealsDetails() {
  const [mealDetails, setmealDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const detailsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const detailsData = await detailsResponse.json();
      setmealDetails(detailsData);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {mealDetails ? (
        <MealDetails data={ mealDetails.meals[0] } />
      ) : null}
    </div>
  );
}
