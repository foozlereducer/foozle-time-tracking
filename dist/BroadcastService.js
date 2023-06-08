import { BroadcastChannel } from "broadcast-channel";
export class BroadcastChannelService {
    broadcastChannel;
    constructor(name) {
        this.broadcastChannel = new BroadcastChannel(name);
    }
    postMessage = (msg) => {
        this.broadcastChannel.postMessage(msg);
    };
}
//# sourceMappingURL=BroadcastService.js.map