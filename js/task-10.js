function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");
let amount = 0;
input.focus();

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  amount = input.value;
  let initialPx = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const br = document.createElement("br");
    divBoxes.appendChild(br);
    div.classList.add("box");
    div.style.width = initialPx + (i * 10) + "px";
    div.style.height = initialPx + (i * 10) + "px";
    div.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(div);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  input.value = "";
  input.focus();
}