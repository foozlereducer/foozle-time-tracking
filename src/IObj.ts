/**
 * Create Object Interface - this is used to standardize object literal creation
 */
interface IObj {
  setObj(params: any, ...args: any[]): any;
  getTime():number;
  getType():string;
}

export default IObj;
