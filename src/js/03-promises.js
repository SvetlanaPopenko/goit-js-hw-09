import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { delay, amount, step } = evt.target.elements;

  for (let i = 0; i < amount.value; i += 1) {
    createPromise(i, Number(delay.value))
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`,{timeout:1000,});
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,{timeout:1000});
  });
    Number(delay.value) += Number(step.value);
  }
  evt.target(reset);

}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
  } else {
        reject({ position, delay });
  }
    }, delay);
    })
  }
