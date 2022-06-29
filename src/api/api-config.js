/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */

import { BASE_URL } from '../constants/export';

class Api {
  constructor(data) {
    this._baseUrl = data;
  }

  // вспомогательная функция проверки на ошибку возвращающая либо ОК ,либо ОШИБКУ
  _parseResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
  };

  // Запрос ингредиентов
  takeIngredients() {
    return fetch(`${this._baseUrl}/ingredients`).then((res) => this._parseResponse(res));
  }

  // Отправка данных заказа
  postOrder(order) {
    return fetch(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        ingredients: order,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос на восстановление пароля
  postEmail(email) {
    return fetch(`${this._baseUrl}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос на обновление пароля
  postPassword(password, code) {
    return fetch(`${this._baseUrl}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        token: code,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос на авторизацию
  postLogin(email, password) {
    return fetch(`${this._baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос на регистрацию
  postRegister(email, name, password) {
    return fetch(`${this._baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос данных пользователя
  getUserData(token) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: token,
      },
    }).then((res) => this._parseResponse(res));
  }

  // Запрос на редактирвоание данных пользователя
  patchUserData(token, name, email, password) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: token,
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос для обновления токена
  postRefreshToken(refreshToken) {
    return fetch(`${this._baseUrl}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: refreshToken,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос на выход из системы
  postLogout(refreshToken) {
    return fetch(`${this._baseUrl}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: refreshToken,
      }),
    }).then((res) => this._parseResponse(res));
  }
}

export default new Api(BASE_URL);
