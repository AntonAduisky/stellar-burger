/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredientsStyles from './BurgerIngredients.module.css';
import ProductNavigation from './components/productNavigation/ProductNavigation';
import ProductList from './components/productList/ProductList';
import { ProductType, ariaLables } from '../../utils/variables';
import sortItems from '../../utils/utils';
import productPropType from '../../utils/propTypes';

function BurgerIngredients({ data, onIngredientClick }) {
  // сортировка по типа продукта
  const bread = sortItems(ProductType.Bread.type, data);
  const sauce = sortItems(ProductType.Sauce.type, data);
  const main = sortItems(ProductType.Main.type, data);
  return (
    <section className={`${BurgerIngredientsStyles.products} pt-10`} aria-label={ariaLables.ingridients}>
      <h2 className="text text_type_main-large pb-5">Соберите бургер</h2>
      <ProductNavigation tabs={[ProductType.Bread, ProductType.Sauce, ProductType.Main]} />
      <div className={`${BurgerIngredientsStyles.listsWrapper} pt-10`}>
        <ProductList items={bread} itemsType={ProductType.Bread} onIngredientClick={onIngredientClick} />
        <ProductList items={sauce} itemsType={ProductType.Sauce} onIngredientClick={onIngredientClick} />
        <ProductList items={main} itemsType={ProductType.Main} onIngredientClick={onIngredientClick} />
      </div>
    </section>
  );
};
/* Проверка типов данных, полученных на вход */
BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(productPropType.isRequired).isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};

export default BurgerIngredients;
