import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { INITIAL_STATE, INITIAL_CONTEXT } from './constants';
import { reducer } from './reducer';

export const BurgerConstructorContext = createContext(INITIAL_CONTEXT);

export function BurgerConstructorProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const providerValue = useMemo(() => ({ state, dispatch }), []);

  return (
    <BurgerConstructorContext.Provider value={providerValue}>
      {children}
    </BurgerConstructorContext.Provider>
  );
}

BurgerConstructorProvider.propTypes = {
  children: PropTypes.isRequired,
};
