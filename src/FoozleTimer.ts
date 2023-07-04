import { BroadcastService } from "./BroadcastService";

class FoozleTimer {
  timerInterval:any;
  broadcastService:BroadcastService;

/**
 * Construct
 */
  constructor(broadcastService:BroadcastService) {
    this.timerInterval = null;
    this.broadcastService = broadcastService;
  }

  startTimer(intervalTime = 1000) {
    const self:any = this;
    this.timerInterval = setInterval(function() {
      self.broadcastService.postMessage({countBy:1, status:"pass", datetime:new Date()})
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