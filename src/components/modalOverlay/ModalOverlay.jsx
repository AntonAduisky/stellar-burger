/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import ModalOverlayStyles from './ModalOverlay.module.css';

/* Полупрозрачная подложка под модальное окно */
function ModalOverlay({ handleClick }) {
  return <div className={ModalOverlayStyles.overlay} onClick={handleClick} />;
}

ModalOverlay.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
