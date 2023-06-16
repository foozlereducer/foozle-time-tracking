class AbsObj {
    // Page Object set to accept dynamic properties
    obj = {};
    timeKey;
    timePrecision;
    time;
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
    setTimePrecision(precision = 4) {
        this.timePrecision = precision;
    }
    /**
     * Get the time in milliseconds
     * @returns
     */
    getTime() {
        let time = this.obj[this.timeKey];
        if ('undefined' === typeof time) {
            time = 0;
        }
        return time;
    }
    /**
     * Get the time type
     * @returns string - the time key
     */
    getType() {
        return this.timeKey;
    }
    /**
     * Do Action should be overriden
     * spread params and args allows flexibility
     * @returns
     */
    doAction() {
        return;
    }
    get() {
        return {};
    }
    /**
     * Set Obj
     * must be overriden
     */
    setObj(params, ...args) { }
}
export default AbsObj;
//# sourceMappingURL=AbsObj.js.map