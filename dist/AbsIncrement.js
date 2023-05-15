class AbsIncrement {
    TimeUnit;
    Obj;
    Evt;
    eventName;
    constructor(TimeUnit, Obj, eventName = 'FoozleInterval') {
        this.TimeUnit = TimeUnit;
        this.Obj = Obj;
        this.eventName = eventName
        this.Evt = addEventListener(this.eventName, () => {
            console.log('fired in TimeObjCore' + "\n")
        })
    }

    removeEvent() {
        removeEventListener(this.eventName, this.Evt);
    }
    /**
     * icrement must be overriden
     * @param params - any number of any type
     * @param args - any args
     * @returns object
     */
    increment(params, ...args) {
        return {};
    }
}
export default AbsIncrement;
//# sourceMappingURL=AbsIncrement.js.map