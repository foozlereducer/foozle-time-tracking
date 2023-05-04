import {IObj, IStrategy} from './index';
import AbsObj from './AbsObj';

/**
 * Creates a Page Object
 */
class TimeObjCore extends AbsObj implements IObj, IStrategy {
  /**
   * Create Object - an interface enforced method that can be trusted to return a page config object
   * @returns the page config object
   */
  createObj(): object {
    return this.setObj();
  }
  /**
   *
   * @param key - a key that defines the top reference value of the Page's object literal
   * @param timerValue  - set the start timerValue for the Page Object
   */
  setObj(time = 0, key = 'milliseconds', timingPrecision = 4): object {
    this.timeKey = key;
    this.timePrecision = timingPrecision;
    this.time = time;
    return this.doAction();
  }

  doAction() {
    this.obj = {};
    this.obj[this.timeKey] = this.time;
    return this.obj;
  }
}

export default TimeObjCore;
