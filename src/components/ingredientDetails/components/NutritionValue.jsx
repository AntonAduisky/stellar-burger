import React from 'react';
import PropTypes from 'prop-types';
import NutritionValueStyles from './NutritionValue.module.css';

function NutritionValue({ text, value }) {
  return (
    <li className={`${NutritionValueStyles.nutritionListItem}`}>
      <p className="text text_type_main-default text_color_inactive mb-2">{text}</p>
      <span className="text text_type_digits-default text_color_inactive">{value}</span>
    </li>
  );
}

NutritionValue.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default NutritionValue;
