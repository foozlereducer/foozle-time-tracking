

class ActoTimer extends EventTarget {
  storage: any;
  TM: any;
  timerInterval: any;
  target:EventTarget;
  channel:BroadcastChannel;

/**
 * Construct
 */
  constructor(channel:any) {
    super();
    this.timerInterval = null;
    this.target = new  EventTarget();
    this.channel = channel;
  }

  /**
   * Time interval callback function
   */
  emit(listener:EventTarget) {
    this.channel.postMessage(1);
    console.log('emit')
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
