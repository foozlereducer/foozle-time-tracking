import AbsObj from "./AbsObj";
import { ITimingUnit } from "./ITimingUnit";

abstract class AbsIncrement extends EventTarget {
    TimeUnit:ITimingUnit;
    Obj:AbsObj;
    count:number;
    i:number = 0;

    constructor(TimeUnit:any, Obj:AbsObj, count:number=0) {
        super();
        this.TimeUnit = TimeUnit;
        this.Obj = Obj;
        this.count = count;
    }

    /**
     * icrement must be overriden 
     * @param params - any number of any type
     * @param args - any args
     * @returns object
     */
    increment(): object {
       return {};
    }
}

export default AbsIncrement;