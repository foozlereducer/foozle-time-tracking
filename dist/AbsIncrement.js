class AbsIncrement extends EventTarget {
    TimeUnit;
    Obj;
    constructor(TimeUnit, Obj) {
        super();
        this.TimeUnit = TimeUnit;
        this.Obj = Obj;
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