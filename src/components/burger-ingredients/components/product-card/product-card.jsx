/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React, { useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { setCurrentIngredient } from '../../../../providers/actions/ingredient';
import styles from './styles.module.css';

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const curentIngredient = () => {
    dispatch(setCurrentIngredient(item));
  };

  const { bun, filling } = useSelector((store) => store.burgerConstructor);
  // счетчик наличия ингрединта в меню
  const setCount = useMemo(() => {
    if (item.type === 'bun') {
      return bun && item._id === bun._id ? 1 : null;
    }
    return filling && filling.filter((fillingItem) => fillingItem._id === item._id).length;
  }, [bun, filling, item._id, item.type]);

  return (
    <div
      className={`${styles.card} pl-4 pr-4`}
      onClick={curentIngredient}
    >
      {setCount > 0 && <Counter count={setCount} size="default" />}
      <img className="" src={item.image} alt={item.name} />
      <p className="text text_type_digits-default mt-1 mb-1">
        {item.price}
        <CurrencyIcon />
      </p>
      <h3 className="text text_type_main-default">{item.name}</h3>
    </div>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductCard;
