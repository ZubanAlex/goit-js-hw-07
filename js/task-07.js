const text = document.querySelector('#text');
const range = document.querySelector('#font-size-slider');
text.style.fontSize = `${range.value}px`;

const changeFontSize = function() {
  text.style.fontSize = `${range.value}px`;
};

range.addEventListener('input', changeFontSize);
