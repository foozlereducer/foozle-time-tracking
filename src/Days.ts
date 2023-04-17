/**
 * Days is a concrete strategy that returns days
 */
class Days implements IStrategy {
    timeType:string;
    incrementUnit:number;
    baseMilliseconds:number;

    constructor(type='day', incrementUnit=1, baseMilliseconds = 86400000) {
        if(typeof type !== 'string') {
            type = 'unknown'
        }

        this.timeType = type;

        if (typeof incrementUnit !== 'number' || typeof incrementUnit !== 'bigint' && Number.isNaN(incrementUnit)) {
            incrementUnit = 1
        }

        this.incrementUnit = incrementUnit;

        this.baseMilliseconds = baseMilliseconds;

    }

    getType() {
        return this.timeType;
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
  
  export default Days;