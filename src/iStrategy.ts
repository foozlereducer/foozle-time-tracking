/**
 * Interface Strategy ~ will be inforce a concrete strategy to implement the 
 * doAction() method
 * @param timeObj optional - will hold the timing object literal where the object will be updated with the time
 */
interface IStrategy {
    doAction(timeObj?:any, counter?:number): any;
}