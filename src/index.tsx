/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
// связываем react и redux
import { Provider } from 'react-redux';
// создание store подключение thunk
// import { createStore, applyMiddleware } from 'redux';
// redux синхронен,для асинхронных действий нужен thunk
// import thunk from 'redux-thunk';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './components/app/app';
// import { rootReducer } from './providers/reducers';
// import { composeEnhancers } from './utils/redux-devtools';
// import { ALL_ORDERS_URL, USER_ORDERS_URL } from './constants/api-constants';
// import { wsAllOrdersActions, wsUserOrdersActions } from './providers/actions/ws';
// import { socketMiddleware } from './middleware/socketMiddleware';
import reportWebVitals from './reportWebVitals';
import { store } from './providers/store';

ReactDOM.render(
  <Router basename="/stellar-burger">
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

reportWebVitals();
