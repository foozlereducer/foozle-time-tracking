class AbsObj {
    // Page Object set to accept dynamic properties
    obj = {};
    timeKey;
    timePrecision;
    time;
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
        return this.obj[this.timeKey];
    }
    /**
     * Get the time type
     * @returns string - the time key
     */
    getType() {
        return this.timeKey;
    }
}
export default AbsObj;
//# sourceMappingURL=AbsObj.js.map