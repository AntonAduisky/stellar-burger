/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './BurgerConstructor.module.css';
import { ProductType, ariaLables } from '../../utils/variables';
import productPropType from '../../utils/propTypes';
import sortItems from '../../utils/utils';

/* Конструктор бургера */
function BurgerConstructor(props) {
  // все,у чего ingredientType 'Bun' -является булкой.
  // Для работы нужен обbект,а не массив обьектов,по-этому используем первый из них
  const bread = sortItems(ProductType.Bread.type, props.order)[0];

  // filling-это массив в который попадет любое *наполнение* не имеющее типа 'Bun'
  // см. перебор *заказа ниже*
  const filling = [];

  // переберем заказ.
  /* Отрисовка отфильрованной булки */
  props.order.forEach((item) => {
    if (item.type !== ProductType.Bread.type) {
      filling.push(item);
    }
  });

  // Первый аргумент - аккумулятор, в который все складывается,
  // второй - то что складываем,
  // а третий - первоначальное значение
  // метод reduce выбран потому, что он перебирает массив и возвращает одно результирующее значение.
  const price = filling.reduce((sum, item) => sum + item.price, bread.price);
  return (
    <section className={`${burgerConstructorStyles.container} pt-25 pl-4`} aria-label={ariaLables.constructor}>
      <ul className={`${burgerConstructorStyles.productItem}`}>
        <li className={`${burgerConstructorStyles.ingredienItem} ml-4`}>
          {/* Вставка заготовки ингредиентов для конструктора из библиотеки UI */}
          <ConstructorElement
            type="top"
            isLocked
            text={`${bread.name} (верх)`}
            price={bread.price}
            thumbnail={bread.image_mobile}
          />
        </li>
        <li className={`${burgerConstructorStyles.productItem}`}>
          <ul className={`${burgerConstructorStyles.fillingList} mt-4 mb-4`}>
            {filling.map((item) => (
              <li key={item._id} className={`${burgerConstructorStyles.fillingItem} pb-4 pr-2`}>
                <div className="pr-2">
                  <DragIcon />
                </div>
                {/* Вставка заготовки ингредиентов для конструктора из библиотеки UI */}
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image_mobile}
                />
              </li>
            ))}
          </ul>
        </li>
        <li className={`${burgerConstructorStyles.productItem} pl-4`}>
          {/* Вставка заготовки ингредиентов для конструктора из библиотеки UI */}
          <ConstructorElement
            type="bottom"
            isLocked
            text={`${bread.name} (низ)`}
            price={bread.price}
            thumbnail={bread.image_mobile}
          />
        </li>
      </ul>
      {/* Итоговая стоимость бругера с кнопкой заказа */}
      <div className={`${burgerConstructorStyles.order} mt-10`}>
        <span className="text text_type_digits-medium mr-10">
          {price}
          {' '}
          <CurrencyIcon />
        </span>
        <Button type="primary" size="medium" onClick={props.onOrderConfirmClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}
/* Проверка типов данных, полученных на вход */
BurgerConstructor.propTypes = {
  order: PropTypes.arrayOf(productPropType.isRequired).isRequired,
  onOrderConfirmClick: PropTypes.func.isRequired,
};

export default BurgerConstructor;
