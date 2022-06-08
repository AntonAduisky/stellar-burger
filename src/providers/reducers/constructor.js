import { ADD, DELETE, RESET } from '../actions/constructor';

const initialState = {
  bun: null,
  filling: [],
  orderId: [],
  totalPrice: 0,
};

// eslint-disable-next-line default-param-last
export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      if (action.item.type === 'bun') {
        if (state.bun) {
          return {
            ...state,
            bun: action.item,
            orderId: [...state.orderId]
              .filter((id) => id !== state.bun._id)
              .concat(action.item._id),
            totalPrice: state.totalPrice - state.bun.price * 2 + action.item.price * 2,
          };
        }
        return {
          ...state,
          bun: action.item,
          orderId: [...state.orderId, action.item._id],
          totalPrice: state.totalPrice + action.item.price * 2,
        };
      }
      return {
        ...state,
        filling: [...state.filling, action.item],
        orderId: [...state.orderId, action.item._id],
        totalPrice: state.totalPrice + action.item.price,
      };

    case DELETE:
      return {
        ...state,
        filling: [...state.filling].filter((item) => item.uId !== action.item.uId),
        orderId: [...state.orderId].filter((id) => id !== action.item._id),
        totalPrice: state.totalPrice - action.item.price,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};
