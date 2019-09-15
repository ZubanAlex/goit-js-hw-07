const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');

ingredients.map(item => {
  let createLi = document.createElement('li');
  createLi.insertAdjacentHTML('afterbegin', item);
  ingredientsList.appendChild(createLi);
});
