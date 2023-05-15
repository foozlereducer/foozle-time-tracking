import AbsObj from './AbsObj.js';
/**
 * Creates a Page Object
 */
class TimeObjVimeo extends AbsObj {
    /**
     *
     * @param key - a key that defines the top reference value of the Page's object literal
     * @param timerValue  - set the start timerValue for the Page Object
     */
    setObj(isplaying = false, volume = 0, progress = 0, videoname = '', key = 'milliseconds') {
        this.obj.video = {};
        this.obj.video.isPlaying = isplaying;
        this.obj.video.volume = volume;
        this.obj.video.videoName = videoname;
        this.obj.video.progress = progress;
        this.obj[key] = Number(((progress % 1) * 1000).toFixed(2));
    }
    doAction() {
        return this.obj;
    }
}
export default TimeObjVimeo;
//# sourceMappingURL=TimeObjVimeo.js.map