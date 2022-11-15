function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let randomHexColor = null;
let isActive = true;

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
  if (isActive) {
    randomHexColor = setInterval(() => {
      body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 700);
    btnStart.setAttribute('disabled', true);
  }
  isActive = false;
}

function onBtnStop() {
  clearInterval(randomHexColor);
  if (!isActive) {
    btnStart.removeAttribute('disabled', true);
  }
  isActive = true;
}
