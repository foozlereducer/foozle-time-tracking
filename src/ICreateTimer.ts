import { FoozleTimer } from ".";

export interface ICreateTimer {
    subUnique:string;
    type:string;
    request(): FoozleTimer
}