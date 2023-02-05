import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form")
const delay = document.querySelector("[name='delay']")
const step = document.querySelector("[name='step']")
const amount = document.querySelector("[name='amount']")

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  let delayValue = Number(delay.value)
  const stepValue = Number(step.value)
  const amountValue = Number(amount.value)

  for (let i = 1; i <= amountValue; i+=1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }); 
    delayValue = delayValue + stepValue;
  }

}



