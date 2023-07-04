export class BroadcastService {
    broadcastChannel;
    constructor(name) {
        this.broadcastChannel = new BroadcastChannel(name);
    }
    postMessage(msg) {
        this.broadcastChannel.postMessage(msg);
    }
    getBroadcastChannel() {
        return this.broadcastChannel;
    }
}
//# sourceMappingURL=BroadcastService.js.map