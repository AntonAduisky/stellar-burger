import { BURGER_CONSTRUCTOR_ACTION_TYPE } from './constants';

export const reducer = (state, action) => {
  switch (action.type) {
    case BURGER_CONSTRUCTOR_ACTION_TYPE.SET_INGREDIENTS:
      return { ...state, ingredients: action.payload };

    default: throw new Error(`Wrong type of action: ${action.type}`);
  }
};
