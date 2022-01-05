import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

function Explore() {
  const history = useHistory();
  const goDrink = () => history.push('/explorar/bebidas');
  const goMeal = () => history.push('/explorar/comidas');

  return (
    <>
      <Header />
      <section>
        <button
          type="button"
          name="Explorar Comidas"
          data-testid="explore-food"
          onClick={ goMeal }
        >
          Explorar Comidas
        </button>
        <button
          type="button"
          name="Explorar Bebidas"
          data-testid="explore-drinks"
          onClick={ goDrink }
        >
          Explorar Bebidas
        </button>
      </section>
    </>
  );
}

export default Explore;
