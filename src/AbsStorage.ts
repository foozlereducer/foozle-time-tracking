/**
 * Abstrace Storage - provides a base for any storage type to extend and be compliant with the IStorage interface
 */
abstract class AbsStorage extends EventTarget{
  /**
   * Id that is used as an unique part of the storage key
   */
  uniqueId: string;
  /**
   * A prefix for the storage key for the config object
   */
  prefix: string;

  /**
   * Constructor - binds methods and intilizes the properties
   */
  constructor() {
    super();
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

  generateUniqueId():string {
    const date = new Date();
    return Math.floor(date.getTime()/1000).toString()
  }
  /**
   * Set Unique Id - sets the unique name to be used as a storage key
   * @param pagename
   */
  setUniqueId(uniqueId: string = '') {
    if ('' === uniqueId) {
      this.uniqueId = this.generateUniqueId();
    } else {
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
  setPrefix(prefix: string) {
    this.prefix = prefix;
  }
}

export default AbsStorage;
