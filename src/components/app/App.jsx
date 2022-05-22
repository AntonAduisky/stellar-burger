import React, { useState, useEffect } from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../appHeader/AppHeader';
import { order } from '../../utils/order';
import BurgerIngredients from '../burgerIngredients/BurgerIngredients';
import BurgerConstructor from '../burgerConstructor/BurgerConstructor';
import { apiConfig, parseResponse } from '../../api/apiConfig';
import OrderDetails from '../orderDetails/OrderDetails';
import IngredientDetails from '../ingredientDetails/IngredientDetails';
import Modal from '../modal/Modal';

function App() {
  /* Стейт ингредиентов для компонента 'BurgerIngredients' */
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  /* Булевый стейт для изменения состояния (открыто/закрыто) для модального окна с деталями сделанного заказа */
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);
  /* Булевый стейт для изменения состояния (открыто/закрыто) для модального окна с ингредиентом */
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = useState(false);
  /* Стейт для передачи в модальное окно выбранного ингредиента */
  const [ingredient, setIngredient] = useState({});

  /* Запрос на сервер и монитрование полученного списка ингредиентов в компонент "BurgerIngredients" */
  function getData() {
    // eslint-disable-next-line no-undef
    fetch(`${apiConfig.url}`)
      .then(parseResponse)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsloading(false);
      });
  }
  /* Монитрование пустого массива для ингредиентов, куда в дальнейшем будут вмонитрованы ингредиенты функцией "getData" */
  useEffect(() => {
    getData();
  }, []);
  /* Закрытие модального окна */
  const closeAllModals = () => {
    setIsIngredientDetailsOpened(false);
    setIsOrderDetailsOpened(false);
    setHasError(false);
  };
  /* Закрытие модального окна с ингредиентом клавишей "Escape" */
  const handleEscKeydown = (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  };
  /* Закрытие модального окна с ингредиентом клавишей "x" */
  const handleCloseClick = (e) => {
    if (e.target) {
      closeAllModals();
    }
  };
  /* Хендлер клика по ингредиенту, открывающий модалку и передающий в нее значения кликнутого ингредиента,
  "item", передан через props в компонент "BurgerIngredients" */
  const handleIngredientClick = (item) => {
    setIngredient(item);
    setIsIngredientDetailsOpened(true);
  };
  /* Хендлер октрытия модального окна с деталями заказа */
  const handleOrderClick = () => {
    setIsOrderDetailsOpened(true);
  };
  /* Рендер всех компонентов */
  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <main className={`${AppStyles.main} mb-10`}>
        <BurgerIngredients data={data} onIngredientClick={handleIngredientClick} />
        <BurgerConstructor order={order} onOrderConfirmClick={handleOrderClick} />
      </main>

      {!isloading && hasError && (
        <Modal
          heading="Что-то пошло не так..."
          handleKeydown={handleEscKeydown}
          closeModal={handleCloseClick}
        />
      )}
      {isOrderDetailsOpened && (
        <Modal handleKeydown={handleEscKeydown} closeModal={handleCloseClick}>
          <OrderDetails />
        </Modal>
      )}
      {isIngredientDetailsOpened && (
        <Modal
          heading="Детали ингредиента"
          handleKeydown={handleEscKeydown}
          closeModal={handleCloseClick}
        >
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}

    </div>
  );
}

export default App;
