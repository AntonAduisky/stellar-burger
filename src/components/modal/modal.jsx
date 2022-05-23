/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';

const rootModalContainer = document.getElementById('modals');

/* Передача props для модального окна, используются в компоненте App */
const Modal = ({
  closeModal, handleKeydown, heading, children,
}) => {
  /* Монитрование случателя нажатия клваиши */
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  /* Рендер вне корневого элемента */
  return ReactDOM.createPortal(
    <section className={styles.container}>
      <div className={`${styles.wrapper}`}>
        {heading && (
          <h2 className={`${styles.heading} text text_type_main-large`}>{heading}</h2>
        )}
        <button className={styles.closeButton} onClick={closeModal}>
          <CloseIcon type="primary" />
        </button>

        {children}
      </div>
      <ModalOverlay handleClick={closeModal} />
    </section>,
    rootModalContainer,
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handleKeydown: PropTypes.func.isRequired,
  heading: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Modal;
