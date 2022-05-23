import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import ProductNavigation from './components/productNavigation/ProductNavigation';
import ProductList from './components/productList/ProductList';
import { ProductType, ariaLable } from '../../constants';
import { sortItems } from '../../utils/sortItems';
import { productPropType } from '../../constants/propTypes';

function BurgerIngredients({ data, onIngredientClick }) {
  // сортировка по типа продукта
  const bread = sortItems(ProductType.Bread.type, data);
  const sauce = sortItems(ProductType.Sauce.type, data);
  const main = sortItems(ProductType.Main.type, data);
  return (
    <section className={`${styles.products} pt-10`} aria-label={ariaLable.ingridients}>
      <h2 className="text text_type_main-large pb-5">Соберите бургер</h2>
      <ProductNavigation tabs={[ProductType.Bread, ProductType.Sauce, ProductType.Main]} />
      <div className={`${styles.listsWrapper} pt-10`}>
        <ProductList items={bread} itemsType={ProductType.Bread} onIngredientClick={onIngredientClick} />
        <ProductList items={sauce} itemsType={ProductType.Sauce} onIngredientClick={onIngredientClick} />
        <ProductList items={main} itemsType={ProductType.Main} onIngredientClick={onIngredientClick} />
      </div>
    </section>
  );
}
/* Проверка типов данных, полученных на вход */
BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(productPropType.isRequired).isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};

export default BurgerIngredients;
