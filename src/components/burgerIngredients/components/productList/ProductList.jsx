/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProductListStyles from './ProductList.module.css';
import ProductCard from '../productCard/ProductCard';

function ProductList({ items, itemsType }) {
  return (
    <div className={`${ProductListStyles.wrapper} pb-10`}>
      <h2>{itemsType.name}</h2>
      <ul className={`${ProductListStyles.list} pr-2 pl-4`}>
        {items.map((item) => (
          <li key={item._id}>
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
};

export default ProductList;
