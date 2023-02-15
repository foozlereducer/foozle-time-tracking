import iLooseObject from "./iLooseObject";

class ActoLocalStorage {
  configObj:any;
  page:string| '';
  prefix:string| '';

  constructor() {
    this.get.bind(this)
    this.configObj = {};
    this.page = '';
    this.prefix = '';
  }

  init(configObj:object, page:string, prefix:string='acto-time-') {
    this.configObj = configObj;
    this.page = page;
    this.prefix = prefix;
    localStorage.setItem(this.prefix + this.page , JSON.stringify(this.configObj));
  }

  get() {
    let p:any = localStorage.getItem(this.prefix + this.page)
    
    if(null == p) {
      this.init(this.configObj,this.page, this.prefix);
    }

    return JSON.parse(p);
  }

  getPage() {
    return this.page;
  }

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

  set(value:object) {
      localStorage.setItem(this.prefix + this.page , JSON.stringify(value));
  }

  setPage(pagename:string) {
    this.page = pagename;
  }

  getPrefix() {
    return this.prefix;
  }

  setPrefix(prefix:string) {
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