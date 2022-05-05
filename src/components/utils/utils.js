// проверка типа по которому будет производиться сортировка ингридиентов
// Первый аргумент sortItems - тип по которому будет сортироваться,
// второй - массив, который будем сортировать.
// Пустой массив - третий аргумент, начальное значение
const sortItems = (type, arr) => arr.reduce((acc, item) => {
  if (item.type === type) {
    acc.push(item);
  }
  return acc;
}, []);

export default sortItems;
