/**
 * Merge Object - Can merge two object literals
 */
class MergeObjs {
    /**
     * 
     * @param aObj - the first object literal
     * @param bObjs - the second object literal
     * @returns object - a single object literal that contains the content of both objects
     */
    execute(aObj:object, bObjs:object) {
        return {
          ...aObj,
          ...bObjs
        }
      }
}

export default MergeObjs;