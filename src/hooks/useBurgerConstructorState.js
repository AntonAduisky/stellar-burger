import { useContext } from 'react';
import { BurgerConstructorContext } from '../providers/BurgerConstructorProvider';

export const useBurgerConstructorState = () => {
  const context = useContext(BurgerConstructorContext);

  if (!context) {
    throw new Error('context error');
  }

  const { state, dispatch } = context;

  return { ...state, dispatch };
};
