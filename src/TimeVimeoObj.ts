import {IObj} from './index';
import ILooseObject from './iLooseObject';

/**
 * Create Video Object
 */
class TimeVimeoObj implements IObj {
  // video config object
  obj: ILooseObject;
  // highest key of the object literal
  topKey: string;
  /**
   * Constructor - initializes the class's properties
   * @param key - the top key the video object should use
   */
  constructor(key = 'video') {
    this.obj = {};
    this.topKey = key;
  }
  /**
   * Create Object - an interface enforced method that can be trusted to return a video config object
   * @returns the video config object
   */
  createObj(): object {
    return this.obj;
  }
  /**
   * Set Object - accepts video config properties and set them
   * @param isplaying bool - true / false if the video is playing
   * @param volume number - a number that represents the current volume of a video
   * @param progress number - a float that represents the video's time progress
   * @param videoname string - the video's name
   * @return object - the vimeo config object
   */
  setObj(isplaying = false, volume = 0, progress: number = 0, videoname = ''):object {
    // Choice to see if the video object is topmost
    if ('video' === this.topKey) {
      this.obj.video = {
        isplaying,
        volume,
        progress,
        videoname,
      };
    } else {
      // this references a video object withing an object literal.
      this.obj[this.topKey] = {
        isplaying,
        volume,
        progress,
        videoname,
      };
    }
    return  this.createObj();
  }

  incrementTime(time:number|null = null, isplaying = false, volume = 0, progress: number = 0, videoname = ''):object| null {
    if (true === isplaying) {
      if (null !== time) {
        this.obj.this.key.isplaying = isplaying;
        this.obj.this.key.volume = volume;
        // add the time passed into incrementTime(time) from the video event
        this.obj.this.key.progress = this.obj.this.key.progress + time;
        this.obj.this.key.videoname = videoname;
        return this.obj;
      }
    }
    return null;
  }

  getTotalTime():number|null {
    return this.obj.miliseconds;
  }
  doAction(isplaying = false, volume = 0, progress: number = 0, videoname = '') {
    this.setObj(isplaying = false, volume = 0, progress = 0, videoname = '');
  }
}

export default TimeVimeoObj;
