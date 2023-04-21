import { FoozleTimer } from './index';
export class FoozleTimeTrackEvent {
    FLS;
    FT;
    timerInstance;
    constructor(FT, FLS) {
        this.FT = FT;
        this.FLS = FLS;
        this.timerInstance = FT;
    }
    getInstance() {
        if (!this.timerInstance) {
            this.timerInstance = new FoozleTimer(this.FLS);
        }
        return this.timerInstance;
    }
}
//# sourceMappingURL=FoozleTimeTrackEvent.js.map