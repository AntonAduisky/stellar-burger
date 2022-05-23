import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { INITIAL_STATE, INITIAL_CONTEXT } from './constants';
import { reducer } from './reducer';

export const ConstructorContext = createContext(INITIAL_CONTEXT);

export function ConstructorProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const providerValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ConstructorContext.Provider value={providerValue}>
      {children}
    </ConstructorContext.Provider>
  );
}

ConstructorProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
