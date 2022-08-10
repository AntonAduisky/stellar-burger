/* eslint-disable react/prop-types */
import React from 'react';

import styles from './styles.module.css';

function FillingIngredients({ check }) {
  return (
    <div
      className={
      check
        ? `${styles.allProductsHover}`
        : `${styles.allProducts} text text_type_main-medium text_color_inactive`
      }
    />
  );
}

export default FillingIngredients;
