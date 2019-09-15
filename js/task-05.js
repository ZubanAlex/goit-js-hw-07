const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const addName = function(e) {
  output.textContent = e.target.value ? e.target.value : 'незнакомец';
};

input.addEventListener('input', addName);
