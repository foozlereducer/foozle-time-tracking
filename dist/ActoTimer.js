import ActoLocalStorage from "./ActoLocalStorage";
class ActoTimers {
    i = 0;
    ALS;
    configObj;
    TM;
    /**
     * Constructor
     * @param ALS - an instance of thee ActoLocalStorage class
     * @param i - the start counting value
     */
    constructor(ALS, i = 0) {
        if (false == ALS instanceof ActoLocalStorage) {
            throw new Error("The first parameter of ActoTimers constructor must be an instance of ActoLocalStorage");
        }
        // Bind `this` to only the class instance
        this.increment = this.increment.bind(this);
        this.getSeconds = this.getSeconds.bind(this);
        this.ALS = ALS;
        this.configObj = this.ALS.get();
        this.i = i;
    }
    /**
     * Increment Counter
     * @param TimeStrategy - a concret time strategy that will manage their respective portions of the config object.
     */
    increment(TimeStrategy) {
        this.i++;
        this.setStoredTime(TimeStrategy);
    }
    /**
     * Set Seconds
     * @param counter number - a number that represents the Timer's count
     */
    setSeconds(counter = 0) {
        this.i = counter;
    }
    /**
    * Get Seconds
    * @returns number - the current ActoTimer count in seconds
    */
    getSeconds() {
        return this.i;
    }
    /**
     * Set Stored Time
     * @param TimeStrategy - A concrete Time Strategy that will ultimately create a time updated config object
     */
    setStoredTime(TimeStrategy) {
        // Use the time strategy to get an updated config object
        this.configObj = TimeStrategy.doAction(this.configObj, this.i);
        // Write the updated config object to storage
        this.ALS.setStorageValues(this.configObj);
    }
    /**
     * Get Stored Time
     * @returns number - the stored seconds
     */
    getStoredTime() {
        // Use storage to get the stored time object
        const storedTime = this.ALS.get();
        // return the seconds attached as node on the config object
        return storedTime.seconds;
    }
    /**
     * Get Config Object - the current state of it.
     * @returns object - the config object literal
     */
    getconfigObj() {
        return this.configObj;
    }
}
export default ActoTimers;
