const validate = (value) => {
  if (!value) {
    return false
  }

  const numberValue = Number(value);

  if (
    Number.isInteger(numberValue) &&
    numberValue > 0 &&
    numberValue < 100 &&
    numberValue % 2 === 0
  ) {
    return true
  } 
  return false
}

const inputElem = document.getElementById('input');
const validateBtn = document.getElementById('button');
const resetBtn = document.getElementById('button2');
const resultElem = document.getElementById('result');

const handleValidation = () => {
  const inputValue = inputElem.value
  const result = validate(inputValue);
  resultElem.innerHTML = result ? "Valid" : "Invalid"
}

const handleClear = () => {
  inputElem.value = "";
  resultElem.innerHTML = ""
}

function validator() {
  validateBtn.addEventListener('click', handleValidation)
  resetBtn.addEventListener('click', handleClear)
}

validator();
