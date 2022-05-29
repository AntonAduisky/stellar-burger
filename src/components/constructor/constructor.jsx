/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { apiConfig, parseResponse } from '../../api/api-config';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { useConstructorState } from '../../hooks/useConstructorState';
import { BURGER_CONSTRUCTOR_ACTION_TYPE } from '../../providers';

export const Constructor = () => {
  const { ingredients, dispatch } = useConstructorState();
  const [isloading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  /* Булевый стейт для изменения состояния (открыто/закрыто) для модального окна с деталями сделанного заказа */
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);
  /* Булевый стейт для изменения состояния (открыто/закрыто) для модального окна с ингредиентом */
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false);
  /* Стейт для передачи в модальное окно выбранного ингредиента */
  const [ingredient, setIngredient] = useState({});
  const [orderNumber, setOrderNumber] = useState(null);

  /* Запрос на сервер и монитрование полученного списка ингредиентов в компонент "BurgerIngredients" */
  function getIngredients() {
    fetch(`${apiConfig.baseUrl}/ingredients`, {
      headers: apiConfig.headers,
    })
      .then(parseResponse)
      .then((res) => {
        dispatch({
          type: BURGER_CONSTRUCTOR_ACTION_TYPE.SET_INGREDIENTS,
          payload: res.data,
        });
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsloading(false);
      });
  }
  // При нажатии на кнопку «Оформить заказ» отправляйте запрос к API

  const ingredientId = ingredients.map((i) => i._id);

  const postOrder = () => {
    fetch(`${apiConfig.baseUrl}/orders`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        ingredients: ingredientId,
      }),
    })
      .then(parseResponse)
      .then((res) => setOrderNumber(res.order.number))
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsloading(false);
      });
  };
  /* Монитрование пустого массива для ингредиентов, куда в дальнейшем будут вмонитрованы ингредиенты функцией "getIngredients" */
  useEffect(() => {
    getIngredients();
  }, []);

  /* Закрытие модального окна */
  const closeAllModals = () => {
    setIsIngredientDetailsOpened(false);
    setIsOrderDetailsOpened(false);
    setHasError(false);
  };
  /* Хендлер клика по ингредиенту, открывающий модалку и передающий в нее значения кликнутого ингредиента,
  "item", передан через props в компонент "BurgerIngredients" */
  const handleIngredientClick = (item) => {
    setIngredient(item);
    setIsIngredientDetailsOpened(true);
  };
  /* Хендлер октрытия модального окна с деталями заказа */
  const handleOrderClick = () => {
    setOrderNumber(null);
    setIsOrderDetailsOpened(true);
    postOrder();
  };
  /* Рендер всех компонентов */
  return (
    <>
      <main className={`${styles.constructor} mb-10`}>
        <BurgerIngredients onIngredientClick={handleIngredientClick} />
        <BurgerConstructor onOrderConfirmClick={handleOrderClick} />
      </main>
      {!isloading && hasError && (
        <Modal
          heading="Что-то пошло не так..."
          closeModal={handleCloseClick}
        />
      )}
      {isOrderDetailsOpened && (
        <Modal closeModal={closeAllModals}>
          <OrderDetails orderNum={orderNumber} />
        </Modal>
      )}
      {isIngredientDetailsOpened && (
        <Modal
          heading="Детали ингредиента"
          closeModal={closeAllModals}
        >
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </>
  );
};
