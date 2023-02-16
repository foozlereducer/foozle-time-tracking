/**
 * Create Video Object
 */
class CreateVideoObj {
    // video config object
    videoObj;
    // highest key of the object literal
    topKey;
    /**
     * Constructor - initializes the class's properties
     * @param key - the top key the video object should use
     */
    constructor(key = 'video') {
        this.videoObj = {};
        this.topKey = key;
    }
    /**
     * Create Object - an interface enforced method that can be trusted to return a video config object
     * @returns the video config object
     */
    createObj() {
        return this.videoObj;
    }
    /**
     * Set Object - accepts video config properties and set them
     * @param isplaying bool - true / false if the video is playing
     * @param volume number - a number that represents the current volume of a video
     * @param progress number - a float that represents the video's time progress
     * @param videoname string - the video's name
     */
    setObj(isplaying = false, volume = 0, progress = 0, videoname = '') {
        // Choice to see if the video object is topmost 
        if ("video" == this.topKey) {
            this.videoObj.video = {
                isplaying: isplaying,
                volume: volume,
                progress: progress,
                videoname: videoname
            };
        }
        else { // this references a video object withing an object literal.
            this.videoObj[this.topKey] = {
                isplaying: isplaying,
                volume: volume,
                progress: progress,
                videoname: videoname
            };
        }
    }
}
export default CreateVideoObj;
