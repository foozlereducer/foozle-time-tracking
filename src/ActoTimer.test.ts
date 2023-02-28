import ActoLocalStorage from "./ActoLocalStorage";
import CreatePageObj from "./CreatePageObj";
import CreateVideoObj from "./CreateVideoObj";
import MergeObjs from "./MergeObjects";
import ActoTimers from "./ActoTimer";
import ConfigFactory from "./ConfigFactory";
import PageTime from "./PageTime";
import VideoProps from "./VideoProps";

let ALS:ActoLocalStorage | null = null;
let AT:ActoTimers | null = null;
let CPO:CreatePageObj | null = null;
let CVO:CreateVideoObj | null = null
let MO:MergeObjs | null = null;
let CF:ConfigFactory | null = null;
let PT:PageTime | null = null;
let VP:VideoProps | null = null;
let configObj:object | null = null;

beforeEach(() => {
    CPO = new CreatePageObj();
    CPO.setObj();
    CVO = new CreateVideoObj();
    CVO.setObj();
    MO = new MergeObjs()
    ALS = new ActoLocalStorage();
    CF = new ConfigFactory();
    configObj = MO.execute(CPO.createObj(), CVO.createObj())
    let page = 'https://testactoapp.com/funster'
    PT = CF.request(PageTime);
    VP = CF.request(VideoProps)
    ALS.init(configObj, page);
    AT = new ActoTimers(ALS, 0)
  });
  
afterEach(() => {
    ALS = null;
    CPO = null;
    CVO = null;
    MO = null;
    CF = null;
});

describe("Acto Timer", () => {
    test("Should throw exception if an ActoLocalStorage instance is not passed", () => {  
      expect(() => {
        new ActoTimers({}, 0)
      }).toThrow("The first parameter of ActoTimers constructor must be an instance of ActoLocalStorage");
    });
  
    test("Newly initialized ActoTimer getters should return 0 seconds", () => {
      expect(AT?.getSeconds()).toBe(0);
      expect(AT?.getStoredTime()).toBe(0);
    });

    test("should increment the seconds to 1 from 0 both for the active counter and the stored count", () => {
      expect(AT?.getSeconds()).toBe(0);
      AT?.setTimeStrategy(PT)
      AT?.increment()
      expect(AT?.getSeconds()).toBe(1);
      expect(AT?.getStoredTime()).toBe(1);
    });

    test("Set storage seconds should be set to 9", () => {
      AT?.setSeconds(8);
      AT?.setTimeStrategy(PT)
      AT?.increment()
      expect(AT?.getStoredTime()).toBe(9);
    });

    test("should set the active timer and the stored count to 6 seconds", () => {
      AT?.setSeconds(5)
      AT?.setTimeStrategy(PT)
      AT?.increment()
      expect(AT?.getSeconds()).toBe(6);
      expect(AT?.getStoredTime()).toBe(6);
    });

    test("should return the full config object with the seconds as 8 and the video object with null values", () => {
      AT?.setSeconds(8);
      AT?.setTimeStrategy(PT)
      AT?.increment()
      expect(AT?.getconfigObj()).toStrictEqual({
        seconds: 9,
        video: { isplaying: false, volume: 0, progress: 0, videoname: '' }
      });
    });

    test("should show that Acto Storage and Acto Timer set and show the same video props ", () => {
      let configO = ALS?.get();
      configO = VP?.doAction(configO, 0, true, 30, 5.234, 'fun')
      ALS?.setStorageValues(configO);
      expect(ALS?.get()).toStrictEqual(AT?.getconfigObj());
      expect(AT?.getconfigObj()).toStrictEqual( {
        seconds: 0,
        video: { isplaying: true, volume: 30, progress: 5.234, videoname: 'fun' }
      });
    });
   
});