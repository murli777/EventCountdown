import timerCallbacks from "./callbackEvents.js";
import Timer from "./Timer.js";
import { getDateDifference } from "./helpers.js";

const startDate = Date.now();
const endDate = new Date(2024, 9, 30);

const eventDate = document.querySelector("#event-date");
eventDate.textContent = endDate.toDateString();

const timeToCount = getDateDifference(startDate, endDate);

new Timer(timeToCount, timerCallbacks);
