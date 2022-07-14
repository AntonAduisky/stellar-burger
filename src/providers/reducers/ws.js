/* eslint-disable default-param-last */
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_WITH_TOKEN,
  WS_GET_MESSAGE,
} from '../actions/ws';

const $initialState = {
  wsRequest: false,
  wsConnected: false,
  wsFailed: false,
  orders: null,
  total: '',
  totalToday: '',
};

export const wsReducer = (state = $initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
        wsRequest: true,
        wsConnected: false,
        wsFailed: false,
      };
    }
    case WS_CONNECTION_WITH_TOKEN: {
      return {
        ...state,
        wsRequest: true,
        wsConnected: false,
        wsFailed: false,
      };
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsRequest: false,
        wsFailed: false,
        wsConnected: true,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsRequest: false,
        wsConnected: false,
        wsFailed: true,
      };
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsRequest: false,
        wsConnected: false,
        wsFailed: false,
        orders: null,
        total: '',
        totalToday: '',
      };
    }
    case WS_GET_MESSAGE: {
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    }
    default: {
      return state;
    }
  }
};
