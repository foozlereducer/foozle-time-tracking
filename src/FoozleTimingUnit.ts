import { ITimingUnit } from "./ITimingUnit";
export class FoozleTimingUnit implements ITimingUnit {
    time: number = 5;
    calculateTime(value: number): number {
        return 5;
    }
}