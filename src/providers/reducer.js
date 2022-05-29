import { BURGER_CONSTRUCTOR_ACTION_TYPE } from './constants';

// функция, которая принимает состояние и action, и возвращает состояние после применения action.
// Если action не относится к текущему редьюсеру, то возвращается состояние, к которому не применён этот action,
// т. е. исходное состояние.
export const reducer = (state, action) => {
  switch (action.type) {
    case BURGER_CONSTRUCTOR_ACTION_TYPE.SET_INGREDIENTS:
      return { ...state, ingredients: action.payload };

    default: throw new Error(`Wrong type of action: ${action.type}`);
  }
};
