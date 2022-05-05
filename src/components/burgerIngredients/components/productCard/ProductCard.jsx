/* eslint-disable eol-last */
/* eslint-disable import/order */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from 'prop-types';
import ProductCardStyles from './ProductCard.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function ProductCard(props) {
  return (
    <div className={`${ProductCardStyles.card} pl-4 pr-4`}>
    <Counter count={24} size="default" />
    <img className="/" src={props.image} alt={props.name} />
    <div className={`${ProductCardStyles.align}`}>
    <p className={`${ProductCardStyles.align} text text_type_digits-default mt-1 mb-1`}>
      {props.price}
    </p>
    <CurrencyIcon />
    </div>
    <h3 className={`text text_type_main-default`}>{props.name}</h3>
  </div>
  );
}

ProductCard.propTypes={
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;