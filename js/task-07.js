const fontSizeRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeRange.value = fontSizeRange.min;

fontSizeRange.addEventListener('input', e => {
  text.style.fontSize = +fontSizeRange.value + 'px';
});