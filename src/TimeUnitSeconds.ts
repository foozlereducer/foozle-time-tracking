import { IStrategy } from "./index";
import AbsTimeUnit from "./AbsTimeUnit";
/**
 * Seconds is a concrete strategy that returns seconds
 */
class TimeUnitSeconds extends AbsTimeUnit implements IStrategy {
    timeType:string;
    incrementUnit:number;
    baseMiliseconds = 1000;

    constructor() {
        super();
        this.timeType = 'secondsAsMilliseconds';
        this.incrementUnit = 1;
        this.baseMiliseconds = 1000;
    }

    getMilliseconds():number {
      return this.baseMiliseconds;
    }

    /**
     * Do Action - generic method that is the action for this strategy
     * seconds need to be converted to miliseconds 
     * @returns number - the increment unit
     */
    doAction(nope=null): number {
      return this.incrementUnit * this.baseMiliseconds;
    }
  }
  
  export default TimeUnitSeconds;