/**
 * Merge Object - Can merge two object literals
 */
class MergeObjs {
    /**
     * Execute - executes the merge of the two objects
     * @param aObj - the first object literal
     * @param bObjs - the second object literal
     * @returns object - a single object literal that contains the content of both objects
     */
    execute(aObj, bObjs) {
        return {
            ...aObj,
            ...bObjs,
        };
    }
}
export default MergeObjs;
//# sourceMappingURL=MergeObjects.js.map