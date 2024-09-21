import { checkForDigits } from "./helpers.js";

export default function driver(time) {
  const daysContainer = document.querySelector("#days .number-container");
  const hoursContainer = document.querySelector("#hours .number-container");
  const minutesContainer = document.querySelector("#minutes .number-container");
  const secondsContainer = document.querySelector("#seconds .number-container");

  const { days, hours, minutes, seconds } = convertFromMilliseconds(time);

  daysContainer.textContent = days;
  hoursContainer.textContent = hours;
  minutesContainer.textContent = minutes;
  secondsContainer.textContent = seconds;
}

function convertFromMilliseconds(seconds) {
  let days = Math.floor(seconds / 86400); // 86400 seconds in a day
  let remainingSeconds = seconds % 86400;
  let hours = Math.floor(remainingSeconds / 3600);
  let remainingMinutes = remainingSeconds % 3600;
  let minutes = Math.floor(remainingMinutes / 60);
  seconds = remainingMinutes % 60;

  days = checkForDigits(days);
  hours = checkForDigits(hours);
  minutes = checkForDigits(minutes);
  seconds = checkForDigits(seconds);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
