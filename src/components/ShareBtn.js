import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import '../css/Footer.css';

export default function ShareBtn({ id, type, dataTestId, local }) {
  let recipesPage = false;
  const url = `http://localhost:3000/${type}/${id}`;
  if (local === '/receitas-feitas') recipesPage = true;

  const [show, setShow] = useState(false);

  const onClick = () => {
    const time = 5000;
    copy(url);
    setShow(true);
    setTimeout(() => setShow(false), time);
  };

  const resultGlobal = (
    <button
      data-testid={ dataTestId }
      type="button"
      onClick={ onClick }
    >
      <img src={ shareIcon } alt="share-icon" />
      {show ? (<Alert variant="success">Link copiado!</Alert>) : null}
    </button>
  );

  const resultDoneRecipes = (
    <button
      data-testid={ dataTestId }
      type="button"
      onClick={ onClick }
      className="shareButton"
      src={ shareIcon }
    >
      {show ? (<Alert variant="success">Link copiado!</Alert>) : null}
    </button>
  );
  return recipesPage ? resultDoneRecipes : resultGlobal;
}

ShareBtn.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  local: PropTypes.string.isRequired,
};
