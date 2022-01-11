import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MealDetails from '../components/MealDetails';
import DetailsProvider from '../context/DetailsProvider';

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
  }, [setmealDetails, id]);

  return (
    <DetailsProvider>
      <Container>
        {mealDetails ? (
          <MealDetails data={ mealDetails.meals[0] } />
        ) : null}
      </Container>
    </DetailsProvider>
  );
}
