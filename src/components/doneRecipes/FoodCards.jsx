import React from 'react';
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ShareBtn from '../ShareBtn';
import '../../css/Footer.css';

function FoodCards({ filterChosen, recipeObj }) {
  const { pathname } = useLocation();
  const history = useHistory();
  const filterText = filterChosen;
  const arrFiltered = filterChosen !== 'all'
    ? recipeObj.filter((el) => el.type === filterText)
    : recipeObj;

  const redirectByClick = ({ type, id }) => {
    if (type === 'bebida') history.push(`/bebidas/${id}`);
    if (type === 'comida') history.push(`/comidas/${id}`);
  };

  const result = !arrFiltered ? null : arrFiltered.map((el, index) => {
    const { tags } = el;
    let tagsSpans = null;
    if (tags[0] !== undefined) {
      tagsSpans = (
        <div>
          <span data-testid={ `${index}-${el.tags[0]}-horizontal-tag` }>
            {el.tags[0]}
          </span>
          <span data-testid={ `${index}-${el.tags[1]}-horizontal-tag` }>
            {el.tags[1]}
          </span>
        </div>
      );
    }
    return (
      <div key={ index }>
        <span data-testid={ `${index}-horizontal-top-text` }>
          {el.type === 'bebida' ? el.alcoholicOrNot : `${el.area} - ${el.category}`}
        </span>
        <button type="button" onClick={ () => redirectByClick(el) }>
          <img
            src={ el.image }
            data-testid={ `${index}-horizontal-image` }
            alt={ el.name }
            className="cardImage"
          />
        </button>
        <button type="button" onClick={ () => redirectByClick(el) }>
          <span data-testid={ `${index}-horizontal-name` }>
            {el.name}
          </span>
        </button>
        <span data-testid={ `${index}-horizontal-done-date` }>
          {el.doneDate}
        </span>
        {tagsSpans}
        <ShareBtn
          id={ el.id }
          type={ el.type === 'bebida' ? 'bebidas' : 'comidas' }
          dataTestId={ `${index}-horizontal-share-btn` }
          local={ pathname }
        />
      </div>
    );
  });

  return result;
}

export default FoodCards;
