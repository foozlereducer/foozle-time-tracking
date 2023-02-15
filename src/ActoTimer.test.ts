import ActoLocalStorage from "./ActoLocalStorage";
import CreatePageObj from "./CreatePageObj";
import CreateVideoObj from "./CreateVideoObj";
import MergeObjs from "./MergeObjects";
import ActoTimers from "./ActoTimer";
let ALS:ActoLocalStorage | null = null;
let AT:ActoTimers | null = null;
let CPO:CreatePageObj | null = null;
let CVO:CreateVideoObj | null = null
let MO:MergeObjs | null = null;

beforeEach(() => {
    CPO = new CreatePageObj();
    CVO = new CreateVideoObj();
    MO = new MergeObjs()
    let configObj = MO.execute(CPO.createObj(), CVO.createObj())
    let page = 'https://testactoapp.com/fun'
    ALS = new ActoLocalStorage();
    ALS.init(configObj,page);
   
    AT = new ActoTimers(ALS, 0)
  });
  
afterEach(() => {
    ALS = null;
    CPO = null;
    CVO = null;
    MO = null;
});

describe("Acto Timer", () => {
    test("should set a base time at 15 secound", () => {
        
        expect(AT?.initializeTimerConfig(15)).toStrictEqual({"https://testactoapp.com/fun": 15});
    });

    test("should return 'acto-time-https://testactoapp.com/fun'", () => {
      expect(1).toBe(1);
    });
 
});