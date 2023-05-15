class ActoTimer extends EventTarget {
    storage;
    TM;
    timerInterval;
    target;

    /**
     * Construct
     */
    constructor() {
        super();
        this.timerInterval = null;
        this.target = new EventTarget();
    }
    /**
     * Time Becon
     */
    emit() {
        this.dispatchEvent(new Event("FoozleInterval"));
    }

    startTimer(intervalTime = 1000) {
        this.timerInterval = setInterval(this.emit, intervalTime);
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