import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import ProductNavigation from './components/product-navigation/product-navigation';
import ProductList from './components/product-list/product-list';
import { ProductType, ariaLable } from '../../constants';
import { sortItems } from '../../utils/sortItems';
import { productPropType } from '../../constants/propTypes';

function BurgerIngredients({ data, onIngredientClick }) {
  // сортировка по типа продукта
  const BREAD = sortItems(ProductType.Bread.type, data);
  const SAUCE = sortItems(ProductType.Sauce.type, data);
  const MAIN = sortItems(ProductType.Main.type, data);
  return (
    <section className={`${styles.products} pt-10`} aria-label={ariaLable.ingridients}>
      <h2 className="text text_type_MAIN-large pb-5">Соберите бургер</h2>
      <ProductNavigation tabs={[ProductType.Bread, ProductType.Sauce, ProductType.Main]} />
      <div className={`${styles.listsWrapper} pt-10`}>
        <ProductList items={BREAD} itemsType={ProductType.Bread} onIngredientClick={onIngredientClick} />
        <ProductList items={SAUCE} itemsType={ProductType.Sauce} onIngredientClick={onIngredientClick} />
        <ProductList items={MAIN} itemsType={ProductType.Main} onIngredientClick={onIngredientClick} />
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
