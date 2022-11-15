function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;
isActive = true;

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
  if (isActive) {
    timerId = setInterval(() => {
      body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 700);
    btnStart.setAttribute('disabled', true);
  }
  isActive = false;
}

function onBtnStop() {
  clearInterval(timerId);
  if (!isActive) {
    btnStart.removeAttribute('disabled', true);
  }
  isActive = true;
}
