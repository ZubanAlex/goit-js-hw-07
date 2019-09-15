'use strict';

const categoriesList = document.querySelector('#categories');
const categoriesListItems = document.querySelectorAll('.item');

console.log(`В списке ${categoriesListItems.length} категории`);

categoriesListItems.forEach(item =>
  console.log(
    `Категория: ${item.children[0].textContent} 
Количество элементов: ${item.children[1].children.length}`,
  ),
);
