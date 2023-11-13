// Output Elements
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("min");
const secondsElement = document.getElementById("sec");
const ampmElement = document.getElementById("ampm");

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  // Convert hours to 12-hour format
//   hours = hours % 12 || 12;
  hoursElement.style.setProperty("--value", hours);
  minutesElement.style.setProperty("--value", minutes);
  secondsElement.style.setProperty("--value", seconds);
  ampmElement.innerText = ampm;

  // Schedule the next update after 1000 milliseconds (1 second)
  setTimeout(updateClock, 1000);
}

// Initial update
updateClock();
