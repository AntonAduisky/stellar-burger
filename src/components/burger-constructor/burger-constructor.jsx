import React from 'react';
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.css';
import { ProductType, ariaLable, productPropType } from '../../constants';
import { sortItems } from '../../utils/sortItems';

/* Конструктор бургера */
function BurgerConstructor({ order, onOrderConfirmClick }) {
  // все,у чего ingredientType 'Bun' -является булкой.
  // Для работы нужен обbект,а не массив обьектов,по-этому используем первый из них
  const BREAD = sortItems(ProductType.Bread.type, order)[0];

  // FILLING-это массив в который попадет любое *наполнение* не имеющее типа 'Bun'
  // см. перебор *заказа ниже*
  const FILLING = [];

  // переберем заказ.
  /* Отрисовка отфильрованной булки */
  order.forEach((item) => {
    if (item.type !== ProductType.Bread.type) {
      FILLING.push(item);
    }
  });

  // Первый аргумент - аккумулятор, в который все складывается,
  // второй - то что складываем,
  // а третий - первоначальное значение
  // метод reduce выбран потому, что он перебирает массив и возвращает одно результирующее значение.
  const price = FILLING.reduce((sum, item) => sum + item.price, BREAD.price);
  return (
    <section className={`${styles.container} pt-25 pl-4`} aria-label={ariaLable.constructor}>
      <ul className={`${styles.productItem}`}>
        <li className={`${styles.ingredienItem} ml-4`}>
          {/* Вставка заготовки ингредиентов для конструктора из библиотеки UI */}
          <ConstructorElement
            type="top"
            isLocked
            text={`${BREAD.name} (верх)`}
            price={BREAD.price}
            thumbnail={BREAD.image_mobile}
          />
        </li>
        <li className={`${styles.productItem}`}>
          <ul className={`${styles.FILLINGList} mt-4 mb-4`}>
            {FILLING.map((item) => (

              <li key={item._id} className={`${styles.FILLINGItem} pb-4 pr-2`}>
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
        <li className={`${styles.productItem} pl-4`}>
          {/* Вставка заготовки ингредиентов для конструктора из библиотеки UI */}
          <ConstructorElement
            type="bottom"
            isLocked
            text={`${BREAD.name} (низ)`}
            price={BREAD.price}
            thumbnail={BREAD.image_mobile}
          />
        </li>
      </ul>
      {/* Итоговая стоимость бругера с кнопкой заказа */}
      <div className={`${styles.order} mt-10`}>
        <span className="text text_type_digits-medium mr-10">
          {price}
          {' '}
          <CurrencyIcon />
        </span>
        <Button type="primary" size="medium" onClick={onOrderConfirmClick}>
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
