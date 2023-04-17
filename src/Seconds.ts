/**
 * Seconds is a concrete strategy that returns seconds
 */
class Seconds implements IStrategy {
    timeType:string;
    incrementUnit:number;
    baseMiliseconds = 1000000;

    constructor(type='seconds', incrementUnit=1,  baseMiliseconds = 1000000 ) {
        if(typeof type !== 'string') {
            type = 'unknown'
        }

        this.timeType = type;

        if (typeof incrementUnit !== 'number' || typeof incrementUnit !== 'bigint' && Number.isNaN(incrementUnit)) {
            incrementUnit = 1
        }

        this.incrementUnit = incrementUnit;
        this.baseMiliseconds = baseMiliseconds;
    }

    getType() {
        return this.timeType;
    }

    /**
     * Do Action - generic method that is the action for this strategy
     * seconds need to be converted to miliseconds 
     * @returns number - the increment unit
     */
    doAction(nope=null): any {
      return this.incrementUnit * this.baseMiliseconds;
    }
  }
  
  export default Seconds;