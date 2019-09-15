const input = document.querySelector('#controls input');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const divForInput = document.querySelector('#boxes');

function createBoxes(amount) {
  let step = 10;
  let boxes = [];
  const size = 30;

  function getRandomNumber(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i <= amount; i += 1) {
    let createbox = document.createElement('div');
    createbox.style.width = `${size + i * step}px`;
    createbox.style.height = `${size + i * step}px`;
    createbox.style.backgroundColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    boxes.push(createbox);
  }
  return boxes;
}

render.addEventListener('click', function pushBoxes() {
  divForInput.innerHTML = createBoxes(input.value).reduce((acc, item) => {
    acc = acc + item.outerHTML;
    return acc;
  }, '');
});

destroy.addEventListener('click', function cleanMainDivInputValue() {
  divForInput.innerHTML = '';
  input.value = 0;
});
