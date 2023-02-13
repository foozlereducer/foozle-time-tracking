
import iCreateObj from "./iCreateObj"
import iLooseObject from "./iLooseObject";

class CreatePageObj implements iCreateObj{
    pageObj:iLooseObject;
    constructor() {
        this.pageObj = {};
    }
    createObj(): object {
        return this.pageObj;
    }
    setObj(key="seconds", timerValue=0) {
        if("seconds" == key) {
            this.pageObj.seconds = timerValue;
        } else {
            this.pageObj[key] = timerValue;
        }
      }
}

export default CreatePageObj;