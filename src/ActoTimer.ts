import iLooseObject from "./iLooseObject";

class ActoTimers {
    i = 0;
    ALS:any;
    key:string;
    timingObj:object;
    /**
     * Constructor 
     * @param ALS - an instance of thee ActoLocalStorage class
     * @param i - the start counting value
     */
    constructor(ALS:any,i=0) {
      // Bind `this` to only the class instance
      this.increment = this.increment.bind(this);
      this.setSeconds = this.setSeconds.bind(this)
      this.getSeconds = this.getSeconds.bind(this);
      this.ALS = ALS;

      this.timingObj = this.ALS.get();
      this.key = this.ALS.getPage();
    
      let currentSeconds =  this.getSeconds();
      if ('initialize' == currentSeconds) {
        this.setSeconds();
      } else {
       this.initializeTimerConfig(0)
      }
      this.i = i;
      
    }
    
    initializeTimerConfig(seconds:number) {
      let obj = this.ALS.get();
      let key = this.ALS.getPage();
      obj[key] = seconds;
      this.ALS.set(obj);
      return this.ALS.get();
    }
    increment() {
        // this.i++
        // this.setCount(this.getSeconds())
        // this.setSeconds()
        // console.log(this.getSeconds());
    }

    setCount(counter=0) {
      this.i = counter;
    }

    setSeconds() {
      // if (!null == this.timeStorageJson.page) {
      //   createPage(this.page)
      // }
      // this.timeStorageJson.page.seconds = this.i;
      //   let storedObj = [];
      //   storedObj[this.timeStorageJson.page] = JSON.stringify(this.timeStorageJson)
      //   localStorage.setItem(this.key, storedObj)
    }

    getSeconds() {
        if (null == this.timingObj) {
          return 'initialize'
        }
    }
}

export default ActoTimers;