/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../appHeader/AppHeader';
import { order } from '../../utils/order';
import BurgerIngredients from '../burgerIngredients/BurgerIngredients';
import BurgerConstructor from '../burgerConstructor/BurgerConstructor';
import { apiConfig, parseResponse } from '../../utils/apiConfig';

function App() {
  const [data, setData] = useState([]);

  function getData() {
    // eslint-disable-next-line no-undef
    fetch(`${apiConfig.url}`)
      .then(parseResponse)
      .then((json) => {
        setData(json.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <main className={`${AppStyles.main} mb-10`}>
        <BurgerIngredients data={data} />
        <BurgerConstructor order={order} />
      </main>
    </div>
  );
}

export default App;
