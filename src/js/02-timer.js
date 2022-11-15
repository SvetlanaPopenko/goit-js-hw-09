import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let setTimerId = null;
let deltaTime = null;

const inputDateTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const dataDays = document.querySelector('[data-days]');

const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

btnStart.addEventListener('click', onBtnClickTimer);

function onBtnClickTimer() {
  Notify.success('Click Me', {
    timeout: 4000,
  });

   setTimerId = setInterval(() => {
    if (deltaTime > 0) {
      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      dataDays.textContent = `${days}`;
      dataHours.textContent = `${hours}`;
      dataMinutes.textContent = `${minutes}`;
      dataSeconds.textContent = `${seconds}`;
    } if (deltaTime <= 0) {
      clearInterval(setTimerId);
    }
  }, 1000);
  inputDateTime.disabled = true;
  btnStart.disabled = true;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    clearInterval(setTimerId);
    const setId = setInterval(() => {
      deltaTime = selectedDates[0].getTime() - new Date().getTime();
      if (deltaTime <= 0) {
        clearInterval(setId);
        Notify.failure('Please choose a date in the future', {
          timeout: 4000,
        });
        btnStart.disabled = true;
        return;
      }
    }, 1000);
    btnStart.disabled = false;
  },
};
  
btnStart.disabled = true;

const timer =flatpickr(inputDateTime, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
