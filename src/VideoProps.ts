import { IStrategy } from "./index";
/**
 * Video Time is a concrete strategy that will manage the page time
 */
class VideoProps implements IStrategy {
  /**
   * Do Action - interface defined know function
   * @param timeObj - as the time object literal.
   */
  doAction(
    timerObj: any,
    counter: number = 0,
    isplaying?: boolean,
    volume?: number,
    progress?: number,
    videoname?: string,
  ): any {
    if ('undefined' === timerObj.video) {
      throw new Error('No video props found in the object');
    }
    timerObj.video.isplaying = isplaying;
    timerObj.video.volume = volume;
    timerObj.video.progress = progress;
    timerObj.video.videoname = videoname;

    return timerObj;
  }
}

export default VideoProps;
