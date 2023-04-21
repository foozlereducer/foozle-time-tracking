class ActoTimer {
    i = 0;
    storage;
    configObj;
    TM;
    timerInterval;
    timeStrategy;
    /**
     * Constructor
     * @param storage - an instance of thee a storage class that implements IStorage
     * @param timeUnit  - an instance of ITimeUnit
     */
    constructor(storage, TimeStrategy) {
        // Bind `this` to only the class instance
        this.increment = this.increment.bind(this);
        this.getSeconds = this.getSeconds.bind(this);
        this.storage = storage;
        this.configObj = this.storage.get();
        this.timerInterval = null;
        this.timeStrategy = TimeStrategy;
        this.i = this.timeStrategy.getIncrementUnit();
    }
    /**
     * Increment Counter
     * @param TimeStrategy - a concret time strategy that will manage their respective portions of the config object.
     */
    increment() {
        this.i++;
        // Use the time strategy to get an updated config object
        this.configObj = this.timeStrategy.doAction(this.configObj, this.i);
        // Write the updated config object to storage
        this.storage.setValue(this.configObj);
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
     * Get Stored Time
     * @returns number - the stored seconds
     */
    getStoredTime() {
        // Use storage to get the stored time object
        const storedTime = this.storage.get();
        // return the seconds attached as node on the config object
        return storedTime.seconds;
    }
    /**
     * Get Config Object - the current state of it.
     * @returns object - the config object literal
     */
    getconfigObj() {
        return this.storage.get();
    }
    startTimer(intervalTime = 1000) {
        this.timerInterval = setInterval(this.increment, intervalTime);
    }
    stopTimer() {
        clearInterval(this.timerInterval);
    }
    getTimer() {
        return this.timerInterval;
    }
}
export default ActoTimer;
//# sourceMappingURL=FoozleTimer.js.map