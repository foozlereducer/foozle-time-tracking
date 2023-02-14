import ActoLocalStorage from "./ActoLocalStorage";
let ALS:any = null;

beforeEach(() => {
  
    let configObj = {'mock': 0}
    let page = 'https://testactoapp.com/fun'
    ALS = new ActoLocalStorage(configObj,page);
    ALS.init();
  });
  
afterEach(() => {
    ALS = null;
});

describe("Acto Local Storage", () => {
    test("should set the storage key to 'steve-https://testactoapp.com/fun'", () => {
      let prefix = 'steve-';
      let configObj = {'mock': 0}
      let page = 'https://testactoapp.com/fun'
      let AS = new ActoLocalStorage(configObj,page, prefix);
      AS.init();
      expect(JSON.stringify(ALS.get('steve-https://testactoapp.com/fun'))).toBe(`{"mock":0}`);
    });

    test("should return 'acto-https://testactoapp.com/fun'", () => {
      expect(JSON.stringify(ALS.get('acto-https://testactoapp.com/fun'))).toBe(`{"mock":0}`);
    });

    test("should get the initialized storage object {mock:0},increment it {mock:1}", () => {
      let obj = ALS.get('acto-https://testactoapp.com/fun')
      obj.mock++;
      ALS.set(obj)
      expect(JSON.stringify(ALS.get('acto-https://testactoapp.com/fun'))).toBe(`{"mock":1}`);
    });

    test("should return 'acto-https://testactoapp.com/fun'", () => {
      let obj = ALS.get('acto-https://testactoapp.com/fun')
      expect(ALS.isJson(obj)).toBe(false);
      expect(ALS.isJson(JSON.stringify(obj))).toBe(true)
    });

    test("should update the storage prefix from 'acto-' to 'steve-'", () => {
      let currentPrefix = ALS.getPrefix();
      expect(currentPrefix).toBe('acto-')
      ALS.updatePrefix('steve-');
      let updatedPrefix = ALS.getPrefix();
      expect(updatedPrefix).toBe('steve-');
    });

    test("should return all key / value pairs that start with 'acto-'", () => {
      for(let i=0; i <= 10; i++) {
        let currentPage = 'acto-https://testactoapp.com/fun' + i;
        ALS.setPage(currentPage);
        ALS.set({mock: i})
      }
      let objs = ALS.getAll()
      expect(objs).toStrictEqual([
        { 'acto-https://testactoapp.com/fun': '{"mock":0}' },
        { 'acto-acto-https://testactoapp.com/fun0': '{"mock":0}' },
        { 'acto-acto-https://testactoapp.com/fun1': '{"mock":1}' },
        { 'acto-acto-https://testactoapp.com/fun2': '{"mock":2}' },
        { 'acto-acto-https://testactoapp.com/fun3': '{"mock":3}' },
        { 'acto-acto-https://testactoapp.com/fun4': '{"mock":4}' },
        { 'acto-acto-https://testactoapp.com/fun5': '{"mock":5}' },
        { 'acto-acto-https://testactoapp.com/fun6': '{"mock":6}' },
        { 'acto-acto-https://testactoapp.com/fun7': '{"mock":7}' },
        { 'acto-acto-https://testactoapp.com/fun8': '{"mock":8}' },
        { 'acto-acto-https://testactoapp.com/fun9': '{"mock":9}' },
        { 'acto-acto-https://testactoapp.com/fun10': '{"mock":10}' }
      ]);
    });
 
});