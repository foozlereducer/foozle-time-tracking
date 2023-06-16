class AbsIncrement extends EventTarget {
    TimeUnit;
    Obj;
    count;
    i = 0;
    constructor(TimeUnit, Obj, count = 0) {
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
    increment() {
        return {};
    }
}
export default AbsIncrement;
//# sourceMappingURL=AbsIncrement.js.map