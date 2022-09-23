import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget.elements;
  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountVal = Number(amount.value);
  let promiseDelay = firstDelay;

  for (let i = 1; i <= amountVal; i += 1) {
    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    promiseDelay += delayStep;
  }
});

