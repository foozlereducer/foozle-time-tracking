import {IObj, IStrategy} from './index';
import ILooseObject from './iLooseObject';
import AbsObj from './AbsObj';

/**
 * Creates a Page Object
 */
class TimeObjVimeo extends AbsObj implements IObj, IStrategy {
  /**
   *
   * @param key - a key that defines the top reference value of the Page's object literal
   * @param timerValue  - set the start timerValue for the Page Object
   */
  setObj(
    isplaying:boolean = false , 
    volume:number = 0, 
    progress:number = 0, 
    videoname:string = '', 
    key = 'milliseconds'
    ): object {
    this.timeKey = key;
    return this.doAction(isplaying, volume, progress, videoname);
  }

  doAction(isplaying:boolean, volume:number, progress:number, videoname:string) {
    // convert decimal to milliseconds
    this.obj[this.timeKey] = ((progress % 1) * 1000).toFixed(this.timePrecision);
    this.obj.video = {};
    this.obj.video.isPlaying = isplaying;
    this.obj.video.volume = volume;
    this.obj.video.progress = progress;
    this.obj.video.videoName = videoname;
    return this.obj;
  }
}

export default TimeObjVimeo;
