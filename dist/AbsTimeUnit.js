class AbsTimeUnit {
    timeType = '';
    incrementUnit = 0;
    baseMiliseconds = 1000;
    getType() {
        return this.timeType;
    }
    getMilliseconds() {
        return this.baseMiliseconds;
    }
    getIncrementUnit() {
        return this.doAction();
    }
    doAction(nope = null) {
        return this.incrementUnit;
    }
}
export default AbsTimeUnit;
//# sourceMappingURL=AbsTimeUnit.js.map