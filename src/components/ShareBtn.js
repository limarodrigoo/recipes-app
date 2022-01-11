import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function ShareBtn({ id, type, dataTestId }) {
  const url = `http://localhost:3000/${type}/${id}`;

  const [show, setShow] = useState(false);

  const onClick = () => {
    const time = 5000;
    copy(url);
    setShow(true);
    setTimeout(() => setShow(false), time);
  };
  return (
    <button
      data-testid={ dataTestId }
      type="button"
      onClick={ onClick }
    >
      <img src={ shareIcon } alt="share-icon" />
      {show ? (<Alert variant="success">Link copiado!</Alert>) : null}
    </button>
  );
}

ShareBtn.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
