import iLooseObject from "./iLooseObject";

/**
 * Acto Local Storage - for managing the timing and configuration that happen on each page of the ACTO platorm
 */
class ActoLocalStorage {
  /**
   * Config Object - the full storage config object literal
   */
  configObj:any;
  /**
   * Id that is used as an unique part of the storage key
   */
  uniqueId:string| '';
  /**
   * A prefix for the storage key for the config object
   */
  prefix:string| '';

  /**
   * Constructor - binds methods and intilizes the properties
   */
  constructor() {
    this.get.bind(this)
    this.configObj = {};
    this.uniqueId = '';
    this.prefix = '';
  }
  /**
   * Init - initializes the storage object by writting to local storage
   * @param configObj - an exernally create config object
   * @param uniqueId - the web page name - or unique name that forms part of the storage key
   * @param prefix - a prefix bound to the front of the storage key
   */
  init(configObj:object, uniqueId:string, prefix:string='acto-time-') {
    this.configObj = configObj;
    this.uniqueId = uniqueId;
    this.prefix = prefix;
    localStorage.setItem(this.prefix + this.uniqueId , JSON.stringify(this.configObj));
  }
  /**
   * Get - it retrieves the config object from storage
   * @returns object - a config object literal
   */
  get() {
    let p:any = localStorage.getItem(this.prefix + this.uniqueId)
    
    if(null == p) {
      this.init(this.configObj,this.uniqueId, this.prefix);
    }

    return JSON.parse(p);
  }
  /**
   * Get Page
   * @returns string - the page or unique name for the storage key
   */
  getPage() {
    return this.uniqueId;
  }

  /**
   * Get all of the acto storage keeys; filter all other storage key out
   * @returns 
   */
  getAll() {
    const items:any = { ...localStorage };
    let filtered:iLooseObject = {}
    for(let key in items) {
      if (key.includes(this.prefix)) {
        filtered[key] = items[key];
      }
    }
    return filtered;
  }
  /**
   * Set - set the local storage by componding a key of prefix and page and store the config object
   * @param value 
   */
  setStorageValues(value:object) {
      localStorage.setItem(this.prefix + this.uniqueId , JSON.stringify(value));
  }
  /**
   * Set Page - sets the unique page or name to be used as a storage key
   * @param pagename 
   */
  setStorageKey(uniqueId:string) {
    this.uniqueId = uniqueId;
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
  setPrefix(prefix:string) {
    this.prefix = prefix;
  }
  
}

export default ActoLocalStorage;