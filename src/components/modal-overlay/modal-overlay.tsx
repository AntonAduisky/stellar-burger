/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

import type { IModalOverlay } from './modal-overlay.props';

/* Полупрозрачная подложка под модальное окно */
function ModalOverlay({ handleClick }: IModalOverlay) {
  return <div className={styles.overlay} onClick={handleClick} />;
}

ModalOverlay.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
