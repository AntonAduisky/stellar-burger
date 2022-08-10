import React from 'react';

import styles from './styles.module.css';

// eslint-disable-next-line react/prop-types
function FillingMain({ check }) {
  return (
    <div
      className={
      check
        ? `${styles.mainHover}`
        : `${styles.main} text text_type_main-medium text_color_inactive`
      }
    />
  );
}

export default FillingMain;
