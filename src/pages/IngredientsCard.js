// import { React, useCallback, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';

// export default function IngredientsCard() {
//   const NUM_MAX = 12;

//   const [ingredient, setIngredient] = useState([]);
//   const getApiIngredients = useCallback(async () => {
//     const APIINGREDIENS = `www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
//     const request = await fetch(APIINGREDIENS);
//     const requestJson = await request.json();
//     setIngredient(requestJson.meals);
//   }, []);
//   // console.log(requestJson);
//   useEffect(() => {
//     getApiIngredients();
//   }, [getApiIngredients]);
//   return (
//     <>
//       <Header />
//       {
//         ingredient.slice(0, NUM_MAX).map((element, ingredients) => (
//           <Link
//             to={ `${ingredients}` }
//             key={ ingredients }
//           >
//             <section
//               data-testid={ `${ingredient}-ingredient-card` }
//             >
//               <img
//                 data-testid={ `${ingredient}-card-img` }
//                 src={ `https://www.themealdb.com/images/ingredients/${element.strIngredient}-Small.png` }
//                 alt="thumb"
//               />
//               <h3 data-testid={ `${ingredient}-card-name` }>{element.strIngredient}</h3>
//             </section>
//           </Link>
//         ))
//       }
//     </>
//   );
// }
