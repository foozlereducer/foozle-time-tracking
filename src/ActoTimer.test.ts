import ActoLocalStorage from "./ActoLocalStorage";
import CreatePageObj from "./CreatePageObj";
import CreateVideoObj from "./CreateVideoObj";
import MergeObjs from "./MergeObjects";
import ActoTimers from "./ActoTimer";
import TimeManager from "./TimeManager";
import PageTime from "./PageTime";
let ALS:ActoLocalStorage | null = null;
let AT:ActoTimers | null = null;
let CPO:CreatePageObj | null = null;
let CVO:CreateVideoObj | null = null
let MO:MergeObjs | null = null;
let TM:TimeManager | null = null;
let PT:PageTime | null = null;

beforeEach(() => {
    CPO = new CreatePageObj();
    CPO.setObj();
    CVO = new CreateVideoObj();
    CVO.setObj();
    console.log(CVO.createObj())
    MO = new MergeObjs()
    ALS = new ActoLocalStorage();
    TM = new TimeManager();
    let configObj = MO.execute(CPO.createObj(), CVO.createObj())
    let page = 'https://testactoapp.com/funster'
    PT = TM.request(PageTime);
    ALS.init(configObj, page);
    AT = new ActoTimers(ALS, 0)
  });
  
afterEach(() => {
    ALS = null;
    CPO = null;
    CVO = null;
    MO = null;
    TM = null;
});

describe("Acto Timer", () => {

    test("Newly initialized ActoTimer should return 0 seconds", () => {
      expect(AT?.getSeconds()).toBe(0);
      expect(AT?.getStoredTime()).toBe(0);
    });

    test("should increment the seconds to 1 from 0", () => {
      expect(AT?.getSeconds()).toBe(0);
      AT?.increment(PT)
      expect(AT?.getSeconds()).toBe(1);
      expect(AT?.getStoredTime()).toBe(1);
    });
 
});