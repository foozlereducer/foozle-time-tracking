import { EventEmitter } from "./EventEmitter";

class ActoTimer extends EventTarget {
  storage: any;
  TM: any;
  timerInterval: any;
  eventEmitter:EventEmitter;
  target:EventTarget;

/**
 * Construct
 */
  constructor(Emit:EventEmitter) {
    super();
    this.timerInterval = null;
    this.target = new  EventTarget();
    this.eventEmitter = Emit;
  }

  /**
   * Time interval callback function
   */
  emit(listener:EventTarget) {
    this.eventEmitter.emit('foozleInterval', listener)
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
