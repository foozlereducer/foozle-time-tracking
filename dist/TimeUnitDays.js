/**
 * Days is a concrete strategy that returns days
 */
class TimeUnitDays {
    timeType;
    incrementUnit;
    baseMilliseconds;
    constructor() {
        this.timeType = 'days';
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
    doAction(nope = null) {
        return this.incrementUnit * this.baseMilliseconds;
    }
}
export default TimeUnitDays;
//# sourceMappingURL=TimeUnitDays.js.map