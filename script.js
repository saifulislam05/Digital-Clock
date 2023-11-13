// Output Elements
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("min");
const secondsElement = document.getElementById("sec");
const millisecondsElement = document.getElementById("ms");

// Btns Elements

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
    timer = setInterval(() => {
        milliseconds += 100;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }

        updateUi();
    }, 100)
}

function updateUi() {
    hoursElement.style.setProperty("--value", hours);
    minutesElement.style.setProperty("--value", minutes);
    secondsElement.style.setProperty("--value", seconds);
    millisecondsElement.textContent=milliseconds;
}
function stopTimer() {
    clearInterval(timer);
}
function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateUi();
}
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);