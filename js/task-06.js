const validationInput = document.querySelector('#validation-input');
const inputLength = validationInput.getAttribute('data-length');

const inputValidation = function() {
  if (validationInput.value.length === Number(inputLength)) {
    validationInput.classList.add('valid');
    validationInput.classList.replace('invalid', 'valid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.replace('valid', 'invalid');
  }
};

validationInput.addEventListener('blur', inputValidation);
