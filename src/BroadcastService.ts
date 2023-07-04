export class BroadcastService {
    broadcastChannel: BroadcastChannel;

    constructor(name:string) {
        this.broadcastChannel = new BroadcastChannel(name);
    }

    postMessage(msg:any) {
        this.broadcastChannel.postMessage(msg);
    }

    getBroadcastChannel() {
        return this.broadcastChannel;
    }
}