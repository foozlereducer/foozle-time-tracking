import AbsObj from './AbsObj';
/**
 * Creates a Page Object
 */
class TimeObjCore extends AbsObj {
    /**
     * Set Object - it defines the object parameters
     * @param time - the passed in time in seconds
     * @param key - the type of time like seconds, millseconds ...
     * @param timingPrecision - ???
     * @returns void
     */
    setObj(time = 0, key = 'milliseconds', timingPrecision = 4) {
        this.timeKey = key;
        this.timePrecision = timingPrecision;
        this.time = time;
    }
    get() {
        return this.doAction();
    }
    doAction() {
        this.obj = {};
        this.obj[this.timeKey] = this.time;
        return this.obj;
    }
}
export default TimeObjCore;
//# sourceMappingURL=TimeObjCore.js.map