import {IObj, IStrategy} from './index';
import ILooseObject from './iLooseObject';

/**
 * Creates a Page Object
 */
class TimeCoreObj implements IObj, IStrategy {
  // Page Object set to accept dynamic properties
  obj: ILooseObject = {};
  key:string;

  /**
   * Constructor - initializes the page object property
   */
  constructor() {
    this.obj = {};
    this.key = '';
  }
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
  setObj(time:number = 0, key = 'milliseconds'): object {
    this.key = key;
    return this.doAction(time);
  }

  getTime():number {
      return this.obj[this.key];
  }

  doAction(time:number) {
    this.obj = {};
    this.obj[this.key] = time;
    return this.obj;
  }
}

export default TimeCoreObj;
