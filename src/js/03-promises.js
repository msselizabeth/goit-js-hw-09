
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notify.init({ cssAnimationStyle: 'from-top', fontAwesomeIconStyle: 'shadow' });

// const refs = {
//   form: document.querySelector('.form'),
//   firstDelay:document.querySelector('input[name = "delay"]'),
//   delayStep:document.querySelector('input[name = "step"]'),
//   amount:document.querySelector('input[name = "amount"]'),
// };

// refs.form.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault();

//   const firstDelay = Number(refs.firstDelay.value);
//   const step = Number(refs.delayStep.value);
//   const amount = Number(refs.amount.value);
  
//   for (let i = 1; i <= amount; i += 1){
//     const delayStep = firstDelay + step * (i - 1);
//     createPromise(i, delayStep)
//     .then(success)
//     .catch(error)
//   };
// };



// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay })
//       } else {
//         reject({ position, delay })
//       }
//     }, delay);
//   });
// };

// function success({ position, delay }) { 
//   Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// };

// function error({ position, delay }) {
//   Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// };
