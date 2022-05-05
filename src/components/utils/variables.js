// все возможные типы ингридиентов
const ProductType = {
  Bread: {
    type: 'bun',
    name: 'Булки',
  },
  Main: {
    type: 'main',
    name: 'Начинки',
  },
  Sauce: {
    type: 'sause',
    name: 'Соусы',
  },
};

// текстовая метка элемента в случае отсутствия видимого *h*
const ariaLables = {
  ingridiens: 'Соберите свой бургер',
  constructor: 'Конструктор бургеров',
};

export { ProductType, ariaLables };
