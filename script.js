// Output Elements
const greetingElement = document.getElementById("greeting");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("min");
const secondsElement = document.getElementById("sec");
const ampmElement = document.getElementById("ampm");

const timeFormatBtn = document.getElementById("timeFormatBtn");

let is24HourFormat = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  let ampm = "";

    if (!is24HourFormat) {
      ampmElement.parentElement.style.display="flex"
    const rawHours = parseInt(hours, 10);
    ampm = rawHours >= 12 ? "PM" : "AM";
    hours = rawHours % 12 || 12;
    }
    else {
        ampmElement.parentElement.style.display="none"
    }

  hoursElement.style.setProperty("--value", hours);
  minutesElement.style.setProperty("--value", minutes);
  secondsElement.style.setProperty("--value", seconds);
  ampmElement.innerText = ampm;

  setTimeout(updateClock, 1000);
    updateBackground(now.getHours());
    updateGreetings(now.getHours());
    
}

// Toggle between 12-hour and 24-hour formats
timeFormatBtn.addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
  updateClock(); // Update the clock immediately after toggling the format
  updateButtonText();
});

updateClock();
updateButtonText();

function updateButtonText() {
  const buttonText = is24HourFormat ? "Change to 12-Hour Format" : "Change to 24-Hour Format";
  timeFormatBtn.innerText = buttonText;
}

function updateBackground(hours) {
  const body = document.body;
  if (hours >= 6 && hours < 18) {
    body.classList.add("day");
    body.classList.remove("night");
  } else {
    body.classList.add("night");
    body.classList.remove("day");
  }
}


function updateGreetings(hours) {
  const greeting = getGreeting(hours);
  greetingElement.innerText = greeting;
}

function getGreeting(hours) {
  let greeting = "";

  if (hours >= 5 && hours < 12) {
    greeting = "Good morning,";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon,";
  } else {
    greeting = "Good evening,";
  }

  return greeting;
}