/**
 * Channel Name value object
 */
export class ChannelName {
    /**
     * ChannelName - name of broadcast channel name
     */
    channelName;
    /**
     * Channel Name Constructor
     * @param channelName:string - the name of a channel,
     *                             this should be shareable with other classes
     */
    constructor(channelName = "FoozleTimer") {
        if (typeof channelName !== "string") {
            channelName = "FoozleTimer";
        }
        this.channelName = channelName;
    }
    /**
     * Get Channel Name
     * @returns string - the name of the channel
     */
    getChannelName() {
        return this.channelName;
    }
}
//# sourceMappingURL=ChannelName.js.map