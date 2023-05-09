import { IStrategy, AbsIncrement, AbsObj } from "./index";
class ActoTimer {
  storage: any;
  TM: any;
  timerInterval: any;
  fIncrement: AbsIncrement;
  configObj:object | null;

/**
 * Construct
 * @param Storage - a storage strategy
 * @param Increment - a increment strategy
 */
  constructor(Storage: any, Increment:AbsIncrement) {

    // Bind `this` to only the class instance
    this.fIncrement = Increment;
    this.storage = Storage;
    this.timerInterval = null;
    this.configObj = null;
  }

  /**
   * Increment Counter
   * @param TimeStrategy - a concret time strategy that will manage their respective portions of the config object.
   */
  increment() {
    // Write the updated config object to storage
    this.storage.setValue(this.configObj);
  }

  /**
   * Get Stored Time
   * @returns number - the stored seconds
   */
  getStoredTime() {
    // Use storage to get the stored time object
    const storedTime = this.storage.get();
    // return the seconds attached as node on the config object
    return storedTime.seconds;
  }
  /**
   * Get Config Object - the current state of it.
   * @returns object - the config object literal
   */
  getConfigObj() {
    return this.storage.get();
  }

  setConfigObj(configObj:object = {}) {
    this.configObj = configObj;
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
