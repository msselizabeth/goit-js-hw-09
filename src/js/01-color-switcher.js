
const refs = {
    body: document.body,
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
}

let intervalId = null;

refs.start.addEventListener('click', changeColor);
refs.stop.addEventListener('click', stop);

function changeColor() {

    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.start.disabled = true;
};

function stop() {
    clearInterval(intervalId);
    refs.start.disabled = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }