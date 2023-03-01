import FoozleLocalStorage from "./FoozleLocalStorage";
let FLS:any = null;

beforeEach(() => {
  
    let configObj = {'mock': 0}
    let page = 'https://testactoapp.com/fun'
    FLS = new FoozleLocalStorage();
    FLS.init(configObj,page);
  });
  
afterEach(() => {
    FLS = null;
});

describe("Acto Local Storage", () => {
    test("should set the storage key to 'steve-https://testactoapp.com/fun'", () => {
      let prefix = 'steve-';
      let configObj = {'mock': 0}
      let page = 'https://testactoapp.com/fun'
      let AS = new FoozleLocalStorage();
      AS.init(configObj, page, prefix);
      expect(JSON.stringify(FLS.get())).toBe(`{"mock":0}`);
    });

    test("should return 'foozle-https://testactoapp.com/fun'", () => {
      expect(JSON.stringify(FLS.get())).toBe(`{"mock":0}`);
    });

    test("should get the initialized storage object {mock:0},increment it {mock:1}", () => {
      let obj = FLS.get()
      obj.mock++;
      FLS.setStorageValues(obj)
      expect(JSON.stringify(FLS.get())).toBe(`{"mock":1}`);
    });

    test("should update the storage prefix from 'foozle-' to 'steve-'", () => {
      let currentPrefix = FLS.getPrefix();
      expect(currentPrefix).toBe('foozle-time-')
      FLS.setPrefix('steve-time-');
      let updatedPrefix = FLS.getPrefix();
      expect(updatedPrefix).toBe('steve-time-');
    });

    test("should return all key / value pairs that start with 'foozle-'", () => {
      for(let i=0; i <= 10; i++) {
        let currentPage = 'https://testactoapp.com/fun' + i;
        FLS.setStorageKey(currentPage);
        FLS.setStorageValues({mock: i})
      }
      let objs = FLS.getAll()
      expect(objs).toStrictEqual({
        "foozle-time-https://testactoapp.com/fun0": "{\"mock\":0}", 
        "foozle-time-https://testactoapp.com/fun1": "{\"mock\":1}", 
        "foozle-time-https://testactoapp.com/fun10": "{\"mock\":10}", 
        "foozle-time-https://testactoapp.com/fun2": "{\"mock\":2}", 
        "foozle-time-https://testactoapp.com/fun3": "{\"mock\":3}", 
        "foozle-time-https://testactoapp.com/fun4": "{\"mock\":4}", 
        "foozle-time-https://testactoapp.com/fun5": "{\"mock\":5}", 
        "foozle-time-https://testactoapp.com/fun6": "{\"mock\":6}", 
        "foozle-time-https://testactoapp.com/fun7": "{\"mock\":7}", 
        "foozle-time-https://testactoapp.com/fun8": "{\"mock\":8}", 
        "foozle-time-https://testactoapp.com/fun9": "{\"mock\":9}", 
        "foozle-time-https://testactoapp.com/fun": "{\"mock\":0}",
    });
  })
});