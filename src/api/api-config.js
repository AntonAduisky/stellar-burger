// информация о сервере (токен,тип данных,ссылка на сервер)
export const apiConfig = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  headers: {
    'content-Typer': 'application/json;charset=utf-8',
  },
};

// вспомогательная функция проверки на ошибку возвращающая либо ОК ,либо ОШИБКУ
export const parseResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
};
