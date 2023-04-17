import { ITimingUnit } from "./ITimingUnit";
/**
 * Class Timing Unit - used to set and then pass the base unit to the increment classes
 */
export class FoozleTimingUnit implements ITimingUnit {
    /**
     * Base Timing unit - represent the base unit that is first set when instantiated
     */
    timeStrategy:any;
    /**
     * Timing Unit constructor
     * @param incrementUnit - the base unit that will be used for timing increments
     */
    constructor(timeStrategy:IStrategy){
        this.timeStrategy = timeStrategy;
    }
    /**
     * Get Base Unit
     * @returns number - the base unit
     */
    getIncrementUnit(): number {
        return this.timeStrategy.doAction(null);
    }

    getType():string {
        return this.timeStrategy.getType(null);
    }

}