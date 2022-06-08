/* eslint-disable no-undef */
// информация о сервере (токен,тип данных,ссылка на сервер)
export const apiConfig = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
};

// вспомогательная функция проверки на ошибку возвращающая либо ОК ,либо ОШИБКУ
export const parseResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
};

export const takeIngredients = () => fetch(`${apiConfig.baseUrl}/ingredients`, {
  headers: apiConfig.headers,
})
  .then((res) => parseResponse(res));

export const postOrder = (order) => fetch(`${apiConfig.baseUrl}/orders`, {
  method: 'POST',
  headers: apiConfig.headers,
  body: JSON.stringify({
    ingredients: order,
  }),
}).then((res) => parseResponse(res));
