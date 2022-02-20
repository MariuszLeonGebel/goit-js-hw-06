const divBoxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
let amount = 0;

input.addEventListener('change', getInputValue);
btnCreate.addEventListener("click", () => {
  createBoxes(amount)
});
btnDestroy.addEventListener("click", destroyBoxes)

function getInputValue(event) {
  amount = event.currentTarget.value;
  return amount;
}

function createBoxes(amount) {
  let width = 20;
  let height = 20;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const br = document.createElement("br");
    width += 10;
    height += 10;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(br);
    divBoxes.appendChild(div);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  input.value = "";
  input.focus();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}