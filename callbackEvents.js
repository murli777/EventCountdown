import driver from "./secondsTozDateConverter.js";

const timerCallbacks = {
  onTick({ time }) {
    driver(time);
  },
};

export default timerCallbacks;
