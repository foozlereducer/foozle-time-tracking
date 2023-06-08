
export interface IStorage {
    /**
     * Id that is used as an unique part of the storage key
     */
    uniqueId: string | null;
    /**
     * A prefix for the storage key for the config object. You can group by a prefix; combined with the uniqueId you 
     * can always query by the prefix which never changes.
     */
    prefix: string | '';
    /**
     * Get a stored value
     * get closest match by a search string
     * @param searchStr : string - a string to perform a storage search. A good candidate is the prefix + uniqueId
     */
    get(searchStr:string):object;
    /**
     * Get an array of all stored values
     */
    getAll():object;
    /**
     * Get the current uniqueId
     */
    getUniqueId():string;
    /**
     * Get the current prefix
     */
    getPrefix():string;

    /**
     * Set the GroupBy prefix
     * @param prefix : string - a string that represents a groupby prefix
     */
    setPrefix(prefix:string):void;
    
    /**
     * set the unique id 
     * @param id 
     */
    setUniqueId(id:string):void;
    /**
     *  Set Value - set the local storage by componding a key of prefix and uniqueId and combines and stores the config object
     * @param value: string
     */
    setValue(value:object):void;
    /**
     * 
     * @param uniqueId: string 
     */
    deleteStoredValues(searchStr:string, subUniqueId:string|null):void;
}