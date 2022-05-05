import React from 'react';
import MainStyles from './Main.module.css';
import data from '../utils/data';
import { order } from '../utils/order';
import BurgerIngredients from '../burgerIngredients/BurgerIngredients';
import BurgerConstructor from '../burgerConstructor/BurgerConstructor';

function Main() {
  return (
    <main className={`${MainStyles.main} mb-10`}>
      <BurgerIngredients data={data} />
      <BurgerConstructor order={order} />
    </main>
  );
}

export default Main;
