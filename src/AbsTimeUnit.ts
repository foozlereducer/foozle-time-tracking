abstract class AbsTimeUnit {
    timeType:string = '';
    incrementUnit:number = 0;
    baseMiliseconds = 1000;
 
    getType() {
        return this.timeType;
    }

    getMilliseconds():number {
        return this.baseMiliseconds;
    }
    
    getIncrementUnit() {
        return this.doAction();
    }

    doAction(nope=null): any {
        return this.incrementUnit;
    } 
 }
 
 export default AbsTimeUnit;