/**
 * Seconds is a concrete strategy that returns seconds
 */
class TimeUnitSeconds {
    timeType;
    incrementUnit;
    baseMiliseconds = 1000;
    constructor() {
        this.timeType = 'secondsAsMilliseconds';
        this.incrementUnit = 1;
        this.baseMiliseconds = 1000;
    }
    getType() {
        return this.timeType;
    }
    getIncrementUnit() {
        return this.doAction();
    }
    /**
     * Do Action - generic method that is the action for this strategy
     * seconds need to be converted to miliseconds
     * @returns number - the increment unit
     */
    doAction(nope = null) {
        return this.incrementUnit * this.baseMiliseconds;
    }
}
export default TimeUnitSeconds;
//# sourceMappingURL=TimeUnitSeconds.js.map