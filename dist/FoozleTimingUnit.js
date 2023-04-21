/**
 * Class Timing Unit - used to set and then pass the base unit to the increment classes
 */
export class FoozleTimingUnit {
    /**
     * Base Timing unit - represent the base unit that is first set when instantiated
     */
    timeStrategy;
    /**
     * Timing Unit constructor
     * @param incrementUnit - the base unit that will be used for timing increments
     */
    constructor(timeStrategy) {
        this.timeStrategy = timeStrategy;
    }
    /**
     * Get Base Unit
     * @returns number - the base unit
     */
    getIncrementUnit() {
        return this.timeStrategy.doAction(null);
    }
    getType() {
        return this.timeStrategy.getType(null);
    }
}
//# sourceMappingURL=FoozleTimingUnit.js.map