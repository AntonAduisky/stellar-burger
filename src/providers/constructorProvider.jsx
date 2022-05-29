import React, { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { INITIAL_STATE, INITIAL_CONTEXT } from './constants';
import { reducer } from './reducer';

// глобальный стейт, который будет хранить в себе список всех ингредиентов.
export const ConstructorContext = createContext(INITIAL_CONTEXT);
export function ConstructorProvider({ children }) {
  // как useState только reducer определяет начальное состояние initialState
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // оптимизация приложения.избавление от лишних вычислений.тут вычисление колбека зависит от стейта
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
