import ActoLocalStorage from './FoozleLocalStorage';

class ActoTimer {
  i = 0;
  FLS: any;
  configObj: any;
  TM: any;
  timerInterval: any;
  timeStratey: any;
  /**
   * Constructor
   * @param FLS - an instance of thee ActoLocalStorage class
   * @param i - the start counting value
   */
  constructor(FLS: any, i = 0) {
    if (false === FLS instanceof ActoLocalStorage) {
      throw new Error('The first parameter of FoozleTimer constructor must be an instance of FoozleLocalStorage');
    }
    if ('number' !== typeof i) {
      i = 0;
    }

    // Bind `this` to only the class instance
    this.increment = this.increment.bind(this);
    this.getSeconds = this.getSeconds.bind(this);
    this.FLS = FLS;
    this.configObj = this.FLS.get();
    this.i = i;
    this.timerInterval = null;
    this.timeStratey = null;
  }

  setTimeStrategy(TimeStrategy: any) {
    this.timeStratey = TimeStrategy;
  }
  /**
   * Increment Counter
   * @param TimeStrategy - a concret time strategy that will manage their respective portions of the config object.
   */
  increment() {
    this.i++;
    // Use the time strategy to get an updated config object
    this.configObj = this.timeStratey.doAction(this.configObj, this.i);
    // Write the updated config object to storage
    this.FLS.setStorageValues(this.configObj);
  }
  /**
   * Set Seconds
   * @param counter number - a number that represents the Timer's count
   */
  setSeconds(counter = 0) {
    this.i = counter;
  }
  /**
   * Get Seconds
   * @returns number - the current ActoTimer count in seconds
   */
  getSeconds() {
    return this.i;
  }

  /**
   * Get Stored Time
   * @returns number - the stored seconds
   */
  getStoredTime() {
    // Use storage to get the stored time object
    const storedTime = this.FLS.get();
    // return the seconds attached as node on the config object
    return storedTime.seconds;
  }
  /**
   * Get Config Object - the current state of it.
   * @returns object - the config object literal
   */
  getconfigObj() {
    return this.FLS.get();
  }

  startTimer(intervalTime = 1000) {
    this.timerInterval = setInterval(this.increment, intervalTime);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  getTimer() {
    return this.timerInterval;
  }
}

export default ActoTimer;
