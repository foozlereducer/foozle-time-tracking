import { 
  FoozleLocalStorage,
  FoozleTimer
 } from './index';

export class FoozleTimeTrackEvent {
    FLS:FoozleLocalStorage;
    FT:FoozleTimer;
    timerInstance:FoozleTimer | null;

    constructor(FT:FoozleTimer, FLS:FoozleLocalStorage) {
      this.FT = FT;
      this.FLS = FLS;
      this.timerInstance = FT;
    }
  
    getInstance() {
      if (!this.timerInstance) {
        this.timerInstance=new FoozleTimer(this.FLS);
      }
      return this.timerInstance;
    }
}