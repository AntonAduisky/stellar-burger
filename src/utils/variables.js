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
    type: 'sauce',
    name: 'Соусы',
  },
};

// текстовая метка элемента в случае отсутствия видимого *h*
const ariaLables = {
  ingridients: 'Соберите свой бургер',
  constructor: 'Конструктор бургеров',
};

export { ProductType, ariaLables };
