/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function ProductNavigation({ tabs }) {
  const [current, setCurrent] = React.useState(tabs[0]);
  return (
    <div style={{ display: 'flex' }}>
      {tabs.map((tab, index) => (
        <Tab key={index} value={tab.type} active={current === tab.type} onClick={setCurrent}>
          {tab.name}
        </Tab>
      ))}
    </div>
  );
}

ProductNavigation.propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default ProductNavigation;
