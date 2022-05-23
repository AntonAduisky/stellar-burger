// информация о сервере (токен,тип данных,ссылка на сервер)
const apiConfig = {
  url: 'https://norma.nomoreparties.space/api/ingredients',
  headers: {

  },
};

// вспомогательная функция проверки на ошибку возвращающая либо ОК ,либо ОШИБКУ
const parseResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
};

export { apiConfig, parseResponse };
