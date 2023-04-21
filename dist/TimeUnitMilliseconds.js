/**
 * Milliseconds is a concrete strategy value object immutable that returns microseconds
 * It is the smallest time unit that is created by the default time types of Milliseconds, Seconds, Hours, Days
 */
class TimeUnitMilliseconds {
    timeType;
    incrementUnit;
    /**
     * This constructor does not take any params as instands of Millisecons should be immutable
     */
    constructor() {
        this.timeType = 'milliseconds';
        this.incrementUnit = 1;
    }
    getType() {
        return this.timeType;
    }
    getIncrementUnit() {
        return this.doAction();
    }
    /**
     * Do Action - generic method that is the action for this strategy
     * As microseconds are the basetime unit they do not need any calculations
     * @returns number - the increment unit
     */
    doAction(nope = null) {
        return this.incrementUnit;
    }
}
export default TimeUnitMilliseconds;
//# sourceMappingURL=TimeUnitMilliseconds.js.map