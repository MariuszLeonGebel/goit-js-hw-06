const images = [{
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gall = document.querySelector("#gallery");
const p = document.querySelector("p");

gall.style.listStyleType = 'none';
gall.style.display = 'flex';
gall.style.flexDirection = 'row';

const gallList = images.map(image => `<li><img width='350px' src='${image.url}' alt='${image.alt}' /></li>`);

gall.insertAdjacentHTML("afterbegin", gallList);