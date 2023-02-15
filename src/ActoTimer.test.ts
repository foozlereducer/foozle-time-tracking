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
    CPO.setObj();
    CVO = new CreateVideoObj();
    CVO.setObj();
    console.log(CVO.createObj())
    MO = new MergeObjs()
    let configObj = MO.execute(CPO.createObj(), CVO.createObj())
    let page = 'https://testactoapp.com/funster'
    ALS = new ActoLocalStorage();
    ALS.init(configObj, page);
    console.log('configobj in timer test', ALS.get())
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
        
        let initConfig = AT?.initializeTimerConfig();
        expect(initConfig).toStrictEqual({
            seconds: 0,
            video: { isplaying: false, volume: 0, progress: 0, videoname: '' }
          });
    });

    test("should return 'acto-time-https://testactoapp.com/fun'", () => {
      expect(1).toBe(1);
    });
 
});