/**
 * Interface Strategy ~ will be inforce a concrete strategy to implement the
 */
interface IStrategy {
  /**
   * Do Action - generic method that allows multiple parameter to be used that define this interface
   * @param params - dynamic paramers
   * @param args - the parameters dynamic arguments
   */
  doAction(params: any, ...args: any[]): any;
}
