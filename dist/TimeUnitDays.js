import AbsTimeUnit from "./AbsTimeUnit";
/**
 * Days is a concrete strategy that returns days
 */
class TimeUnitDays extends AbsTimeUnit {
    timeType;
    incrementUnit;
    baseMilliseconds;
    constructor() {
        super();
        this.timeType = 'daysAsMilliseconds';
        this.incrementUnit = 1;
        this.baseMilliseconds = 86400000;
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