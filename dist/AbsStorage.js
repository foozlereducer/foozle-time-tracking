/**
 * Abstrace Storage - provides a base for any storage type to extend and be compliant with the IStorage interface
 */
class AbsStorage {
    /**
     * Config Object - the full storage config object literal
     */
    configObj;
    /**
     * Id that is used as an unique part of the storage key
     */
    uniqueId;
    /**
     * A prefix for the storage key for the config object
     */
    prefix;
    /**
     * Constructor - binds methods and intilizes the properties
     */
    constructor() {
        this.configObj = {};
        this.uniqueId = '';
        this.prefix = '';
    }
    /**
     * Get Unique Id
     * @returns string - the nique name for the storage key
     */
    getUniqueId() {
        return this.uniqueId;
    }
    generateUniqueId() {
        const date = new Date();
        return Math.floor(date.getTime() / 1000).toString();
    }
    /**
     * Set Unique Id - sets the unique name to be used as a storage key
     * @param pagename
     */
    setUniqueId(uniqueId = '') {
        if ('' === uniqueId) {
            this.uniqueId = this.generateUniqueId();
        }
        else {
            this.uniqueId = uniqueId;
        }
    }
    /**
     * Get Prefix - get the prefix ~ uses appended to the storage key
     * @returns string - the prefix
     */
    getPrefix() {
        return this.prefix;
    }
    /**
     * Set Prefix
     * @param prefix
     */
    setPrefix(prefix) {
        this.prefix = prefix;
    }
}
export default AbsStorage;
//# sourceMappingURL=AbsStorage.js.map