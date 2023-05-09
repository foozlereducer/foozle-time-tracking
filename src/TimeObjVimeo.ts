import {IObj, IStrategy} from './index';
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
    ): void {
    this.obj.video = {}
    this.obj.video.isPlaying = isplaying;
    this.obj.video.volume = volume;
    this.obj.video.videoName = videoname;
    this.obj.video.progress = progress;
    this.obj[key] = Number(((progress % 1) * 1000).toFixed(2))
  }

  doAction() {
    return this.obj;
  }
}

export default TimeObjVimeo;
