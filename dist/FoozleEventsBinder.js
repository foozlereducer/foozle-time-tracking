export class FoozleEventsBinder {
    elements;
    FLS;
    constructor(FLS, elements = 'p, select, button') {
        this.elements = elements;
        this.FLS = FLS;
    }
    getElements() {
        return this.elements;
    }
    runTimerBinders() {
        return true;
    }
}
//# sourceMappingURL=FoozleEventsBinder.js.map