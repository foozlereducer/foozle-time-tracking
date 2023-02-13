
class ActoLocalStorage {
  configObj:object;
  page:string;
  localStorage:any;
  prefix:string;

  constructor(configObj:object, page:string, prefix:string='acto-') {
    this.get.bind(this)
    this.configObj = configObj;
    this.page = page;
    this.prefix = prefix;
  }

  init() {
    localStorage.setItem(this.prefix + this.page , JSON.stringify(this.configObj));
  }

  get() {
    let p:any = localStorage.getItem(this.prefix + this.page)
    
    if(null == p) {
      this.init();
    }

    return JSON.parse(p);
  }

  set(value:object) {
   localStorage.setItem(this.prefix + this.page , JSON.stringify(value));
  }

  getPrefix() {
    return this.prefix;
  }

  updatePrefix(prefix:string) {
    this.prefix = prefix;
  }
  isJson(str:string) {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
  }
}

export default ActoLocalStorage;