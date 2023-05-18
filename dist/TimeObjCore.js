import AbsObj from './AbsObj';
/**
 * Creates a Page Object
 */
class TimeObjCore extends AbsObj {
    /**
     *
     * @param key - a key that defines the top reference value of the Page's object literal
     * @param timerValue  - set the start timerValue for the Page Object
     */
    setObj(time = 0, key = 'milliseconds', timingPrecision = 4) {
        this.timeKey = key;
        this.timePrecision = timingPrecision;
        this.time = time;
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