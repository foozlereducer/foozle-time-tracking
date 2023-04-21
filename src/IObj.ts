/**
 * Create Object Interface - this is used to standardize object literal creation
 */
interface IObj {
  createObj(): object;
  setObj(params: any, ...args: any[]): any;
}

export default IObj;
