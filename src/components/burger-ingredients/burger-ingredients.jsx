/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.css';
import ProductNavigation from './components/product-navigation/product-navigation';
import ProductList from './components/product-list/product-list';
import { ProductType, ariaLable } from '../../constants/export';

function BurgerIngredients() {
  const { ingredients } = useSelector((store) => store.ingredients);

  const [currentTab, setCurrentTab] = useState('bun');

  const [bunsRef, inViewBuns] = useInView({ threshold: 1 });
  const [saucesRef, inViewSauces] = useInView({ threshold: 0.5 });
  const [mainsRef, inViewMains] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab('bun');
    } else if (inViewSauces) {
      setCurrentTab('sauce');
    } else if (inViewMains) {
      setCurrentTab('main');
    }
  }, [inViewBuns, inViewMains, inViewSauces]);

  const handleTabClick = (type) => {
    setCurrentTab(type);
    // eslint-disable-next-line no-undef
    const element = document.getElementById(type);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // сортировка по типа продукта
  const BUNS = ingredients.filter((ingredient) => ingredient.type === ProductType.Bun.type);
  const MAINS = ingredients.filter((ingredient) => ingredient.type === ProductType.Main.type);
  const SAUCES = ingredients.filter((ingredient) => ingredient.type === ProductType.Sauce.type);

  return (
    <section className={`${styles.products} pt-10`} aria-label={ariaLable.ingridients}>
      <h2 className="text text_type_MAIN-large pb-5">Соберите бургер</h2>
      <ProductNavigation
        tabs={[ProductType.Bun, ProductType.Sauce, ProductType.Main]}
        current={currentTab}
        handleClick={handleTabClick}
      />
      <div className={`${styles.listsWrapper} pt-10`}>
        <ProductList items={BUNS} itemsType={ProductType.Bun} ref={bunsRef} />
        <ProductList items={SAUCES} itemsType={ProductType.Sauce} ref={saucesRef} />
        <ProductList items={MAINS} itemsType={ProductType.Main} ref={mainsRef} />
      </div>
    </section>
  );
}

export default BurgerIngredients;
