/* eslint-disable no-undef */
import React, { useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Preloader from '../preloader/preloader';
import Modal from '../modal/modal';

import MainContent from "../main-content/main-content";

import {
  getIngredients, resetIngredientsError, resetOrderError, closeOrderModal, closeIngredientModal, resetConstructor,
} from '../../providers/actions/export';

import {
  Profile,
  NotFound,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
} from '../../pages';

export const Constructor = () => {
  // «вытащить» кусок состояния в компонент из store
  const { ingredientsRequestFailed } = useSelector((store) => store.ingredients);
  const { orderRequestFailed } = useSelector((store) => store.order);
  const { orderRequest, orderNumber } = useSelector((store) => store.order);
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
    <div className={`${styles.constructor} mb-10`}>
      <Switch>
        <Route exact path="/">
          <MainContent />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route exact path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

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
    </div>
  );
};
