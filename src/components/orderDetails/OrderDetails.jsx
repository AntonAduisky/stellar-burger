import React from 'react';
import OrderDetailsStyles from './OrderDetails.module.css';
import doneIcon from './images/done.svg';

/* Соержимое модалки с деталями заказа, которые устанваливаются кликом при формировании заказа */
function OrderDetails() {
  return (
    <div className={`${OrderDetailsStyles.container} mt-30 mb-30`}>
      <h3 className={`${OrderDetailsStyles.number} text text_type_digits-large mb-8`}>034536</h3>
      <span className="text text_type_main-medium mb-15">идентификатор заказа</span>
      <img className={`${OrderDetailsStyles.icon} mb-15`} src={doneIcon} alt="done-icon" />
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <span className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
}

export default OrderDetails;
