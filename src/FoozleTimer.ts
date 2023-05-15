
class ActoTimer extends EventTarget {
  storage: any;
  TM: any;
  timerInterval: any;
  AtEvent:Event;
  target:EventTarget;

/**
 * Construct
 */
  constructor( ) {
    super();
    this.timerInterval = null;
    this.target = new  EventTarget();
    this.AtEvent = new Event("FoozleInterval")

  }

  /**
   * Time Becon
   */
  timeBecon() {
    this.dispatchEvent(this.AtEvent);
  }

  startTimer(intervalTime = 1000) {
    this.timerInterval = setInterval(this.timeBecon, intervalTime);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  getTimer() {
    return this.timerInterval;
  }
}

export default ActoTimer;
