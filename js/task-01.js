const list = document.querySelector("#categories");
const listChildren = list.children;

console.log(`Number of categories: ${listChildren.length}`);

for (let i = 0; i < listChildren.length; i++) {
  console.log("");
  console.log(`Category: ${listChildren[i].children[0].textContent}`);
  console.log(`Elements ${listChildren[i].children[1].children.length}`);
}

console.log(listChildren)