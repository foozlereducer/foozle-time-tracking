
abstract class AbsIncrement {
    TimeUnit:any;
    Obj:any;
    
    constructor(TimeUnit:any, Obj:any) {
        this.TimeUnit = TimeUnit;
        this.Obj = Obj;
    }

    /**
     * icrement must be overriden 
     * @param params - any number of any type
     * @param args - any args
     * @returns object
     */
    increment(params: any, ...args: any[]): object {
       return {};
    }
}

export default AbsIncrement;