import { IStrategy } from "./index";
/**
 * Page Time is a concrete strategy that will manage the page time
 */
class PageTime implements IStrategy {
  /**
   *
   * @param timeObj - as the time object literal.
   */
  doAction(timeObj: any, counter: number): any {
    timeObj.seconds = counter;
    return timeObj;
  }
}

export default PageTime;
