/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import ProductCard from '../product-card/product-card';

function ProductList({ items, itemsType, onIngredientClick }) {
  return (
    <div className={`${styles.container} mb-10`}>
      <h2 className="text text_type_main-medium">{itemsType.name}</h2>
      <ul className={`${styles.list} pr-2 pl-4`}>
        {items.map((item) => (
          <li
            className={styles.item}
            key={item._id}
            onClick={() => onIngredientClick(item)}
          >
            <ProductCard name={item.name} image={item.image} price={item.price} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ProductList.propTypes = {
  itemsType: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};

export default ProductList;
