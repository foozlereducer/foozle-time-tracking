import { BroadcastChannel } from "broadcast-channel";
export class BroadcastChannelService<T> {
    private readonly broadcastChannel: BroadcastChannel;

    constructor(name:string) {
        this.broadcastChannel = new BroadcastChannel(name);
    }

    postMessage = (msg: T) => {
        this.broadcastChannel.postMessage(msg);
    }
}