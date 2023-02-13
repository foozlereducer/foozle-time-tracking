
import iCreateObj from "./iCreateObj"
import iLooseObject from "./iLooseObject";

class CreateVideoObj implements iCreateObj{
    videoObj:iLooseObject;
    topKey:string;
    constructor(key='video') {
        this.videoObj = {};
        this.topKey = key;
    }
    createObj(): object {
        return this.videoObj;
    }
    setObj(isplaying=false, volume=0, progress:number=0, videoname='') {
        if("video" == this.topKey) {
            this.videoObj.video =  {
                isplaying: isplaying,
                volume: volume,
                progress: progress,
                videoname: videoname
            };
        } else {
            this.videoObj[this.topKey] = {
                isplaying: isplaying,
                volume: volume,
                progress: progress,
                videoname: videoname
            };;
        }
      }
}

export default CreateVideoObj;