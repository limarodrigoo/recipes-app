import React from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import drinkImage from '../images/drinkIcon.svg';
import exploreImage from '../images/exploreIcon.svg';
import mealImage from '../images/mealIcon.svg';
import '../App.css';

function Footer() {
  const history = useHistory();
  const { pathname } = useLocation();

  // caso novos endereços sejam adicionados e o footer deva aparecer nele, adicione o endereço ao array abaixo.
  const shouldRenderOn = ['/comidas', '/bebidas', '/explorar', '/explorar/comidas',
    '/explorar/bebidas', '/explorar/comidas/ingredientes',
    '/explorar/bebidas/ingredientes', '/explorar/comidas/area', '/perfil'];

  const handleClick = ({ target }) => {
    const { name } = target;
    switch (name) {
    case 'drink':
      history.push('/bebidas');
      break;
    case 'explore':
      history.push('/explorar');
      break;
    case 'food':
      history.push('/drinks');
      break;
    default:
      console.log('caso suspeito');
    }
  };

  const footerResult = (
    <div data-testid="footer" className="footer">
      <button
        name="drink"
        type="button"
        data-testid="drinks-bottom-btn"
        src={ drinkImage }
        onClick={ handleClick }
      >
        <object
          type="image/svg+xml"
          data={ drinkImage }
        >
          Drinks
        </object>
      </button>
      <button
        name="explore"
        type="button"
        data-testid="explore-bottom-btn"
        src={ exploreImage }
      >
        <object
          type="image/svg+xml"
          data={ exploreImage }
        >
          Explore
        </object>
      </button>
      <button
        name="food"
        type="button"
        data-testid="food-bottom-btn"
        src={ mealImage }
      >
        <object
          type="image/svg+xml"
          data={ mealImage }
        >
          Meals
        </object>
      </button>
    </div>
  );

  return shouldRenderOn.includes(pathname) ? footerResult : null;
}

export default Footer;
