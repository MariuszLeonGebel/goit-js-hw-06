const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const h4_1 = document.createElement("h4");
const p = document.querySelector("p");

h4_1.textContent = "Sposób 1. z wykorzystaniem funkcji createElement";
p.append(h4_1);
for (let i = 0; i < ingredients.length; i++) {
  let elementLi = document.createElement("li");
  elementLi.textContent = ingredients[i];
  list.append(elementLi);
}

const h4_2 = document.createElement("h4");
h4_2.textContent = "Sposób 2. z wykorzystaniem funkcji tablicowej map";
const body = document.querySelector("body");
body.append(h4_2);

const list2 = document.querySelector("#ingredients1");
const ingrList = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join("");

list2.innerHTML = ingrList;
body.append(list2);