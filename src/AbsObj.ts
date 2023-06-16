import ILooseObject from './iLooseObject';

abstract class AbsObj {
   // Page Object set to accept dynamic properties
    obj: ILooseObject = {};
    timeKey:string;
    timePrecision:number;
    time:number;
    milliseconds = 1000;


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
        let time = this.obj[this.timeKey];
        if( 'undefined' === typeof time ) {
            time = 0;
        }
        return time;
    }

    /**
     * Get the time type
     * @returns string - the time key 
     */
    getType():string {
        return this.timeKey;
    }
    /**
     * Do Action should be overriden
     * spread params and args allows flexibility 
     * @returns 
     */
    doAction():any {
        return
    }

    get():object {
        return {}
    }
    /**
     * Set Obj
     * must be overriden
     */
    setObj(params: any, ...args: any[]) {}
}

export default AbsObj;