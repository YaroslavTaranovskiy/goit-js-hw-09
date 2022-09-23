function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.buttonStop.setAttribute('disabled', '');
let timer = null;

refs.buttonStart.addEventListener('click', () => {
  timer = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
    refs.buttonStart.setAttribute('disabled', '');
    refs.buttonStop.removeAttribute('disabled');

});

refs.buttonStop.addEventListener('click', () => {
  clearInterval(timer);
    refs.buttonStart.removeAttribute('disabled');
    refs.buttonStop.setAttribute('disabled', '');
});
