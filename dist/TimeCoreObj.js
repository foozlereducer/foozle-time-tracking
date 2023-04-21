/**
 * Creates a Page Object
 */
class TimeCoreObj {
    // Page Object set to accept dynamic properties
    obj = {};
    key;
    /**
     * Constructor - initializes the page object property
     */
    constructor() {
        this.obj = {};
        this.key = '';
    }
    /**
     * Create Object - an interface enforced method that can be trusted to return a page config object
     * @returns the page config object
     */
    createObj() {
        return this.setObj();
    }
    /**
     *
     * @param key - a key that defines the top reference value of the Page's object literal
     * @param timerValue  - set the start timerValue for the Page Object
     */
    setObj(time = 0, key = 'milliseconds') {
        this.key = key;
        return this.doAction(time);
    }
    getTime() {
        return this.obj[this.key];
    }
    doAction(time) {
        this.obj[this.key] = time;
        return this.obj;
    }
}
export default TimeCoreObj;
//# sourceMappingURL=TimeCoreObj.js.map