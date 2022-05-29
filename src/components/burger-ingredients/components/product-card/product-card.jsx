/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.css';

function ProductCard({ name, image, price }) {
  return (
    <div className={`${styles.card} pl-4 pr-4`}>
      <Counter count={1} size="default" />
      <img className="" src={image} alt={name} />
      <p className="text text_type_digits-default mt-1 mb-1">
        {price}
        {' '}
        <CurrencyIcon />
      </p>
      <h3 className="text text_type_main-default">{name}</h3>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
