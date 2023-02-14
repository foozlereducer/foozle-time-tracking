import iLooseObject from "./iLooseObject";

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

  getAll() {
    const items:any = [];
    let keys = Object.keys(localStorage);
    let i = 0;
    let key:any;
    for (; key = keys[i]; i++) {
      let obj:iLooseObject = {};
      if (key.includes(this.prefix)) {
        obj[key] =  localStorage.getItem(key);
        items.push( obj );
      }
    }

    return items;
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