import AbsStorage from './AbsStorage.js';
/**
 * Foozle Local Storage - for managing the timing and configuration that happen on each page of the ACTO platorm
 */
class FoozleLocalStorage extends AbsStorage {
    /**
     * Init - initializes the storage object by writting to local storage
     * @param configObj - an exernally create config object
     * @param uniqueId - the web page name - or unique name that forms part of the storage key
     * @param prefix - a prefix bound to the front of the storage key
     */
    init(configObj, uniqueId, prefix = 'foozle-time-') {
        this.configObj = configObj;
        this.uniqueId = uniqueId;
        this.prefix = prefix;
        localStorage.setItem(this.prefix + this.uniqueId, JSON.stringify(this.configObj));
    }
    /**
     * Get - it retrieves the config object from storage
     * @returns object - a config object literal
     */
    get() {
        const p = localStorage.getItem(this.prefix + this.uniqueId);
        if (null == p) {
            this.init(this.configObj, this.uniqueId, this.prefix);
        }
        return JSON.parse(p);
    }
    /**
     * Get all of the acto storage keeys; filter all other storage key out
     * @returns
     */
    getAll() {
        const items = { ...localStorage };
        const filtered = {};
        for (const key in items) {
            if (key.includes(this.prefix)) {
                filtered[key] = items[key];
            }
        }
        return filtered;
    }
    /**
     * Set Value - set the local storage by componding a key of prefix and uniqueId and combines and stores the config object
     * @param value: object
     */
    setValue(value) {
        localStorage.setItem(this.prefix + this.uniqueId, JSON.stringify(value));
    }
    /**
     * Delete a value or all values from local storage that match a string
     * @param searchStr - a string to match ( single delete) or match ( all deleted)
     * @param subUniqueId - combines to delete binders that match the searchStr
     * @param all: bool - set to true all matches are deleted if false a single match is done
     */
    deleteStoredValues(searchStr, subUniqueId = null, all = false) {
        const obj = this.getAll();
        for (const [key, value] of Object.entries(obj)) {
            if (false === all) {
                if (key === searchStr) {
                    localStorage.removeItem(key);
                }
            }
            else {
                if (key.includes(searchStr)) {
                    localStorage.removeItem(key);
                }
            }
        }
    }
}
export default FoozleLocalStorage;
//# sourceMappingURL=FoozleLocalStorage.js.map