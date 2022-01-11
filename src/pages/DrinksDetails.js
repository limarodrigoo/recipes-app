import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DrinkDetails from '../components/DrinkDetails';

export default function DrinksDetails() {
  const [details, setdetails] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const detailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const detailsData = await detailsResponse.json();
      setdetails(detailsData);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {details ? (
        <DrinkDetails data={ details.drinks[0] } />
      ) : null}
    </div>
  );
}
