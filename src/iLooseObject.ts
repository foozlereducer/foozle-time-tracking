/**
 * Loose Object Interface - any object that implements this will be able to add dynamic properties
 */
interface ILooseObject {
  [key: string]: any;
}

export default ILooseObject;
