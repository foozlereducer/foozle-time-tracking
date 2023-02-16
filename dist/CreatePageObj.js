/**
 * Creates a Page Object
 */
class CreatePageObj {
    // Page Object set to accept dynamic properties
    pageObj;
    /**
     * Constructor - initializes the page object property
     */
    constructor() {
        this.pageObj = {};
    }
    /**
     * Create Object - an interface enforced method that can be trusted to return a page config object
     * @returns the page config object
     */
    createObj() {
        return this.pageObj;
    }
    /**
     *
     * @param key - a key that defines the top reference value of the Page's object literal
     * @param timerValue  - set the start timerValue for the Page Object
     */
    setObj(key = "seconds", timerValue = 0) {
        if ("seconds" == key) {
            this.pageObj.seconds = timerValue;
        }
        else {
            this.pageObj[key] = timerValue;
        }
    }
}
export default CreatePageObj;
