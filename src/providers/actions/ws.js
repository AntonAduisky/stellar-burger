export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_CLOSE = 'WS_CONNECTION_CLOSE';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const WS_CONNECTION_WITH_TOKEN = 'WS_CONNECTION_WITH_TOKEN';

export const wsInit = () => ({
  type: WS_CONNECTION_START,
});

export const wsConnectionSuccess = () => ({
  type: WS_CONNECTION_SUCCESS,
});

export const wsConnectionError = () => ({
  type: WS_CONNECTION_ERROR,
});

export const wsClose = () => ({
  type: WS_CONNECTION_CLOSE,
});

export const wsInitWithToken = (url) => ({
  type: WS_CONNECTION_WITH_TOKEN,
  payload: url,
});

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsClose: WS_CONNECTION_CLOSE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
  wsInitWithToken: WS_CONNECTION_WITH_TOKEN,
};
