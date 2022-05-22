import { BURGER_CONSTRUCTOR_ACTION_TYPE } from './constants';

export const reducer = (state, action) => {
  switch (action.type) {
    case BURGER_CONSTRUCTOR_ACTION_TYPE.SET_INGREDIENTS:
      console.log(state, action.payload, { ...state, ingredients: action.payload });
      return { ...state, ingredients: action.payload };

    default: throw new Error('Что-то пошло не так...');
  }
};
