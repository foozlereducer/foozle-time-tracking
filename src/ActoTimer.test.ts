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
let configObj:object | null = null;
beforeEach(() => {
    CPO = new CreatePageObj();
    CPO.setObj();
    CVO = new CreateVideoObj();
    CVO.setObj();
    MO = new MergeObjs()
    ALS = new ActoLocalStorage();
    TM = new TimeManager();
    configObj = MO.execute(CPO.createObj(), CVO.createObj())
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


    test("Newly initialized ActoTimer getters should return 0 seconds", () => {
      expect(AT?.getSeconds()).toBe(0);
      expect(AT?.getStoredTime()).toBe(0);
    });

    test("should increment the seconds to 1 from 0 both for the active counter and the stored count", () => {
      expect(AT?.getSeconds()).toBe(0);
      AT?.increment(PT)
      expect(AT?.getSeconds()).toBe(1);
      expect(AT?.getStoredTime()).toBe(1);
    });

    test("Set storage seconds should be set to 8", () => {
      AT?.setSeconds(8);
      AT?.setStoredTime(PT)
      expect(AT?.getStoredTime()).toBe(8);
    });

    test("should set the active timer and the stored count to 5 seconds", () => {
      AT?.setSeconds(5)
      AT?.setStoredTime(PT)
      expect(AT?.getSeconds()).toBe(5);
      expect(AT?.getStoredTime()).toBe(5);
    });

    test("should return the full config object with the seconds as 8 and the video object with null values", () => {
      AT?.setSeconds(8);
      AT?.setStoredTime(PT)
      expect(AT?.getconfigObj()).toStrictEqual({
        seconds: 8,
        video: { isplaying: false, volume: 0, progress: 0, videoname: '' }
      });
    });

    
   
});