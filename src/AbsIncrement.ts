
abstract class AbsIncrement {
    TimeUnit:any;
    Obj:any;
    
    constructor(TimeUnit:any, Obj:any) {
        this.TimeUnit = TimeUnit;
        this.Obj = Obj;
    }

    increment():object {
       return {};
    }
}

export default AbsIncrement;