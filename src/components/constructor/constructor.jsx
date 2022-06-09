/* eslint-disable no-undef */
import React, { useEffect, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Preloader from '../preloader/preloader';
import Modal from '../modal/modal';
import {
  getIngredients, resetIngredientsError, resetOrderError, closeOrderModal, closeIngredientModal,
} from '../../providers/actions/export';

export const Constructor = () => {
  // «вытащить» кусок состояния в компонент из store
  const { ingredientsRequest, ingredientsRequestFailed } = useSelector((store) => store.ingredients);
  const { orderRequest, orderRequestFailed, orderNumber } = useSelector((store) => store.order);
  const { viewedIngredient } = useSelector((store) => store.ingredient);
  // Отправка экшенов в store
  const dispatch = useDispatch();

  const resetErrors = () => {
    dispatch(resetIngredientsError());
    dispatch(resetOrderError());
  };

  const closeIngredientDetailsModal = () => {
    dispatch(closeIngredientModal());
  };

  const closeOrderDetailsModal = useCallback(() => {
    dispatch(closeOrderModal());
    dispatch(resetConstructor());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      {!ingredientsRequestFailed && !ingredientsRequest && (
      <main className={`${styles.constructor} mb-10`}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
      )}

      {ingredientsRequestFailed && orderRequestFailed && (
        <Modal
          heading="Что-то пошло не так..."
          closeModal={resetErrors}
        />
      )}
      {orderNumber && (
        <Modal closeModal={closeOrderDetailsModal}>
            {orderRequest && !orderFailed && <Preloader />}
          {!orderRequest && !orderRequestFailed && <OrderDetails />}
        </Modal>
      )}
      {viewedIngredient && (
      <Modal heading="Детали ингредиента" closeModal={closeIngredientDetailsModal}>
        <IngredientDetails ingredient={viewedIngredient} />
      </Modal>
      )}
    </>
  );
};
