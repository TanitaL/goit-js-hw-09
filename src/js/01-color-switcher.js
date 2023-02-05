function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;

startBtn.addEventListener("click", onStart)
stopBtn.addEventListener("click", onStop)


function onStart() { 
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timerId = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000)
}

function onStop() { 
    clearInterval(timerId)
    stopBtn.disabled = true;
    startBtn.disabled = false;
}




