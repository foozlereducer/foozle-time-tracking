import { FoozleLocalStorage } from "./index"

export class FoozleEventsBinder {
    elements:string;
    FLS:FoozleLocalStorage;
    constructor(FLS:FoozleLocalStorage, elements = "p, select, button" ) {
        this.elements = elements;
        this.FLS = FLS;
    }
    getElements():string {
        return this.elements;
    }
    runTimerBinders() {

        return true;
    }

}