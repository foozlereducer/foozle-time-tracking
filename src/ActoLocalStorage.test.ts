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
    test("should return 'acto-https://testactoapp.com/fun'", () => {
      expect(JSON.stringify(ALS.get('acto-https://testactoapp.com/fun'))).toBe(`{"mock":0}`);
    });
});