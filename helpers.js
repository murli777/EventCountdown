function getDateDifference(startDate, endDate) {
  if (!startDate || !endDate || startDate > endDate) return Number("00");
  return Math.floor((endDate - startDate) / 1000);
}

function checkForDigits(number) {
  return number.toString().padStart(2, "0");
}

export { getDateDifference, checkForDigits };
