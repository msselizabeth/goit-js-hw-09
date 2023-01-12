import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = Date.now();
        const timeDeadline = convertMs(selectedDates[0] - currentDate);

        if (selectedDates[0] <= currentDate) {
            alert('Please choose a date in the future');
            return;
        } else {
            refs.startBtn.disabled = false;
            initializeTimer(timeDeadline);
        };
    },
};
const flatpick = flatpickr('#datetime-picker', options);
let timerIntervalId = null;
refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
    updateTimer();
    timerIntervalId = setInterval(updateTimer, 1000); 
    
    refs.startBtn.disabled = true; 
};

function initializeTimer({ days, hours, minutes, seconds }) {
    refs.days.textContent = zero(days);
    refs.hours.textContent = zero(hours);
    refs.minutes.textContent = zero(minutes);
    refs.seconds.textContent = zero(seconds);
}

function updateTimer() {
        const timeDeadline = flatpick.selectedDates[0] - Date.now();
        const { days, hours, minutes, seconds } = convertMs(timeDeadline);
        refs.days.textContent = zero(days);
        refs.hours.textContent = zero(hours);
        refs.minutes.textContent = zero(minutes);
        refs.seconds.textContent = zero(seconds);
 
    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        clearInterval(timerIntervalId);
        return;
    }
};

function zero(value) {
  return value.toString().padStart(2,"0")
};

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};
