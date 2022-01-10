import React from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import drinkImage from '../images/drinkIcon.svg';
import exploreImage from '../images/exploreIcon.svg';
import mealImage from '../images/mealIcon.svg';
import '../css/Footer.css';

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
      history.push('/comidas');
      break;
    default:
      console.log('caso suspeito');
    }
  };

  const footerResult = (
    <div data-testid="footer" className="footer">
      <button
        id="drinks"
        name="drink"
        type="button"
        aria-label="drinks"
        data-testid="drinks-bottom-btn"
        src={ drinkImage }
        onClick={ handleClick }
        className="drinkButton"
      />
      <button
        name="explore"
        type="button"
        aria-label="explore"
        data-testid="explore-bottom-btn"
        src={ exploreImage }
        onClick={ handleClick }
        className="mealButton"
      />
      <button
        name="food"
        type="button"
        aria-label="food"
        data-testid="food-bottom-btn"
        onClick={ handleClick }
        src={ mealImage }
        className="exploreButton"
      />
    </div>
  );

  return shouldRenderOn.includes(pathname) ? footerResult : null;
}

export default Footer;
