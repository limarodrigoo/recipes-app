import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';

function Explore() {
  return (
    <>
      <Header />
      <section>
        <Link to="/explorar/comidas">
          <button
            type="button"
            name="Explorar Comidas"
            data-testid="explore-food"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            type="button"
            name="Explorar Bebidas"
            data-testid="explore-drinks"
          >
            Explorar Bebidas
          </button>
        </Link>
      </section>
    </>
  );
}

export default Explore;
