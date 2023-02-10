
class ActoLocalStorage {
  configObj:object;
  page:string;
  localStorage:any;

  constructor(configObj:object, page:string) {
    this.get.bind(this)
    this.configObj = configObj;
    this.page = page;
  }

  init() {
    localStorage.setItem('acto-' + this.page , JSON.stringify(this.configObj));
  }

  get() {
    let p:any = localStorage.getItem('acto-' + this.page)
    
    if(null == p) {
      this.init();
    }

    return JSON.parse(p);
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