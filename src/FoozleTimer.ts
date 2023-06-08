

class ActoTimer extends EventTarget {
  storage: any;
  TM: any;
  timerInterval: any;
  target:EventTarget;

/**
 * Construct
 */
  constructor() {
    super();
    this.timerInterval = null;
    this.target = new  EventTarget();
  }

  /**
   * Time interval callback function
   */
  emit(listener:EventTarget) {
    return '';
  }

  startTimer(intervalTime = 1000) {
    this.timerInterval = setInterval(this.emit, intervalTime);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  getTimer() {
    return this.timerInterval;
  }
}

export default ActoTimer;
