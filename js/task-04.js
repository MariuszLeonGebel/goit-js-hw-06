const div = document.querySelector("#counter");
const addOne = document.querySelector('[data-action = "increment"]');
const deductOne = document.querySelector('[data-action = "decrement"]');
const valueFiled = document.querySelector("#value");
let counterValue = 0;

addOne.addEventListener('click', () => {
  counterValue++;
  valueFiled.textContent = counterValue;
})

deductOne.addEventListener('click', () => {
  counterValue--;
  valueFiled.textContent = counterValue;
})