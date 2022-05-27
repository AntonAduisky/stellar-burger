import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.css';
import { ariaLable } from '../../constants';
import { useConstructorState } from '../../hooks/useConstructorState';

/* Конструктор бургера */
function BurgerConstructor({ onOrderConfirmClick }) {
  const { ingredients } = useConstructorState();

  const BREAD = useMemo(
    () => ingredients.find((el) => el.name === "Краторная булка N-200i"),
    [ingredients],
  );

  const FILLING = useMemo(
    () => ingredients.filter((el) => el.type !== 'bun'),
    [ingredients],
  );

  // Функция для использование подсчёта стоимости
  const price = useMemo(() => (
    (ingredients.bun ? ingredients.bun.price * 2 : 0)
        + ingredients.reduce((s, v) => s + v.price, 0)
  ), [ingredients]);

  return (
    <section className={`${styles.container} pt-25 pl-4`} aria-label={ariaLable.constructor}>
      <ul className={`${styles.ingredientList} pr-2`}>

        <li className={`${styles.ingredientItem} ml-4`}>
          {BREAD
          && (
          <ConstructorElement
            type="top"
            isLocked
            text={`${BREAD.name} (верх)`}
            price={BREAD.price}
            thumbnail={BREAD.image_mobile}
          />
          )}
        </li>

        <li className={`${styles.ingredientItem}`}>
          <ul className={`${styles.fillingList} mt-4 mb-4`}>
            {FILLING.map((item) => (
              <li key={item._id} className={`${styles.fillingItem} mb-4 mr-2`}>
                <div className="pr-2">
                  <DragIcon />
                </div>
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image_mobile}
                />
              </li>
            ))}
          </ul>

        </li>

        <li className={`${styles.ingredientItem} pl-4`}>
          {BREAD
          && (
          <ConstructorElement
            type="bottom"
            isLocked
            text={`${BREAD.name} (низ)`}
            price={BREAD.price}
            thumbnail={BREAD.image_mobile}
          />
          )}
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
  // order: PropTypes.arrayOf(productPropType.isRequired).isRequired,
  onOrderConfirmClick: PropTypes.func.isRequired,
};

export default BurgerConstructor;
