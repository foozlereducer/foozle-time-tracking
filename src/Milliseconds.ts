/**
 * Milliseconds is a concrete strategy that returns microseconds
 */
class Milliseconds implements IStrategy {
    timeType:string;
    incrementUnit:number;

    constructor(type='milliseconds', incrementUnit=1000000) {
        if(typeof type !== 'string') {
            type = 'unknown'
        }

        this.timeType = type;

        if (typeof incrementUnit !== 'number' || typeof incrementUnit !== 'bigint' && Number.isNaN(incrementUnit)) {
            incrementUnit = 1000000
        }

        this.incrementUnit = incrementUnit;
    }

    getType() {
        return this.timeType;
    }

    /**
     * Do Action - generic method that is the action for this strategy
     * As microseconds are the basetime unit they do not need any calculations 
     * @returns number - the increment unit
     */
    doAction(nope=null): any {
      return this.incrementUnit;
    }
  }
  
  export default Milliseconds;