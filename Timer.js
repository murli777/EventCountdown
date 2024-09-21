export default class Timer {
  constructor(timeToCount, timerCallbacks) {
    this.timeToCount = timeToCount;
    this.TimeRemaininig = 0;

    if (timerCallbacks) {
      this.onStart = timerCallbacks.onStart;
      this.onTick = timerCallbacks.onTick;
    }
    this.startTimer();
  }

  startTimer = () => {
    this.TimeRemaininig = this.timeToCount;
    this.runTimer();
    this.onTick({ time: this.TimeRemaininig });
  };

  resetTimer = () => {
    clearInterval(this.interval);
    this.TimeRemaininig = 0;
  };

  runTimer() {
    this.interval = setInterval(() => {
      this.emitTick();
    }, 1000);
  }

  emitTick() {
    if (!this.TimeRemaininig) {
      this.resetTimer();
    } else {
      this.TimeRemaininig--;
      this.onTick({ time: this.TimeRemaininig });
    }
  }
}
