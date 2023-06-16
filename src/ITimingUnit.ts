import AbsObj from "./AbsObj";

export interface ITimingUnit {
    getIncrementUnit():number;
    getType():string;
    doAction(params: any, ...args: any[]): any;
    getMilliseconds():number;
}