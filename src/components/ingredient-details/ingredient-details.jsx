import React from 'react';
// import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { productPropType } from '../../constants/propTypes';
import NutritionValue from './components/NutritionValue';

/* Соержимое модалки с ингредиентом, которые устанваливаются кликом по выбранному ингредиенту */
function IngredientDetails({ ingredient }) {
  return (
    <div className={`${styles.container} mb-15`}>
      <img className="mb-4" src={ingredient.image_large} alt={ingredient.name} />
      <p className="text text_type_main-medium mb-8">
        {ingredient.name}
      </p>
      <ul className={`${styles.nutritionList} `}>
        <NutritionValue text="Калории,ккал" value={ingredient.calories} />
        <NutritionValue text="Белки, г" value={ingredient.proteins} />
        <NutritionValue text="Жиры, г" value={ingredient.fat} />
        <NutritionValue text="Углеводы, г" value={ingredient.carbohydrates} />
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredient: productPropType.isRequired,
};

export default IngredientDetails;
