function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const span = body.querySelector('.color');
const button = body.querySelector('.change-color');

button.addEventListener("click", changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = `${getRandomHexColor()}`;
}