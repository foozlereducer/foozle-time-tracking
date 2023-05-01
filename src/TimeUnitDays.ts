import { IStrategy } from "./index";
/**
 * Days is a concrete strategy that returns days
 */
class TimeUnitDays implements IStrategy {
    timeType:string;
    incrementUnit:number;
    baseMilliseconds:number;

    constructor() {
        this.timeType = 'daysAsMilliseconds';
        this.incrementUnit = 1;
        this.baseMilliseconds = 86400000;
    }

    getType() {
        return this.timeType;
    }

    getIncrementUnit() {
        return this.doAction();
    }

    /**
     * Do Action - generic method that is the action for this strategy
     * days need to be converted to miliseconds 
     * @returns number - the increment unit
     */
    doAction(nope=null): any {
      return this.incrementUnit * this.baseMilliseconds;
    }
  }
  
  export default TimeUnitDays;