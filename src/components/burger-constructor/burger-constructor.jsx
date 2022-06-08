import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.css';
import { postOrderRequest, removeItem } from '../../providers/actions/export';
import { ariaLable } from '../../constants/export';

function BurgerConstructor() {
  const {
    bun, filling, totalPrice, orderId,
  } = useSelector((store) => store.burgerConstructor);

  const dispatch = useDispatch();

  const postOrder = (orderData) => {
    dispatch(postOrderRequest(orderData));
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <section className={`${styles.container} pt-25 pl-4`} aria-label={ariaLable.constructor}>
      <ul className={`${styles.ingredientList} pr-2`}>

        {bun && (
        <li className={`${styles.ingredientItem} ml-4`}>
          <ConstructorElement
            type="top"
            isLocked
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </li>
        )}
        {!bun && <p className="text_color_inactive ml-10 pt-10 pl-10">Перетащите ингредиенты</p>}
        {filling.length > 0 && (
        <li className={`${styles.ingredientItem}`}>
          <ul className={`${styles.fillingList} mt-4 mb-4`}>

            {filling.map((item, index) => (
              <li key={item._id} className={`${styles.fillingItem} mb-4 mr-2`}>
                <div className="pr-2">
                  <DragIcon />
                </div>
                <ConstructorElement
                  item={item}
                  deleteHandler={handleDelete}
                  index={index}
                  key={item.uId}
                />
              </li>
            ))}
          </ul>
        </li>
        )}
        <li className={`${styles.ingredientItem} pl-4`}>

          {bun
          && (
          <ConstructorElement
            type="bottom"
            isLocked
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
          )}
        </li>

      </ul>

      <div className={`${styles.order} mt-10`}>
        <span className="text text_type_digits-medium mr-10">
          {totalPrice}
          <CurrencyIcon />
        </span>
        <Button type="primary" size="medium" onClick={() => postOrder(orderId)}>
          Оформить заказ
        </Button>
      </div>

    </section>
  );
}

export default BurgerConstructor;
