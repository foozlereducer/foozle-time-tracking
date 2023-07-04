class FoozleTimer {
    timerInterval;
    broadcastService;
    /**
     * Construct
     */
    constructor(broadcastService) {
        this.timerInterval = null;
        this.broadcastService = broadcastService;
    }
    startTimer(intervalTime = 1000) {
        const self = this;
        this.timerInterval = setInterval(function () {
            self.broadcastService.postMessage({ countBy: 1, status: "pass", datetime: new Date() });
        }, intervalTime);
    }
    stopTimer() {
        clearInterval(this.timerInterval);
    }
    getTimer() {
        return this.timerInterval;
    }
}
export default FoozleTimer;
//# sourceMappingURL=FoozleTimer.js.map