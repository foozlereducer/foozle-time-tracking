import ILooseObject from './iLooseObject';

abstract class AbsObj {
   // Page Object set to accept dynamic properties
    obj: ILooseObject = {};
    timeKey:string;
    timePrecision:number;
    time:number;

    /**
     * Constructor - initializes the page object property
     */
    constructor() {
        this.obj = {};
        this.timeKey = 'milliseconds';
        this.timePrecision = 4;
        this.time = 0;
    }

    setTimePrecision(precision=4) {
        this.timePrecision = precision;
    }

    /**
     * Get the time in milliseconds
     * @returns 
     */
    getTime():number {
        return this.obj[this.timeKey];
    }

    /**
     * Get the time type
     * @returns string - the time key 
     */
    getType():string {
        return this.timeKey;
    }
}

export default AbsObj;