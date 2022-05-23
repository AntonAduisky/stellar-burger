import { useContext } from 'react';
import { ConstructorContext } from '../providers/constructorProvider';

export const useConstructorState = () => {
  const context = useContext(ConstructorContext);

  if (!context) {
    throw new Error('context error');
  }

  const { state, dispatch } = context;

  return { ...state, dispatch };
};
