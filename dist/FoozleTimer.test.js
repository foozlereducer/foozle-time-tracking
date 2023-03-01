import FoozleLocalStorage from "./FoozleLocalStorage";
import CreatePageObj from "./CreatePageObj";
import CreateVideoObj from "./CreateVideoObj";
import MergeObjs from "./MergeObjects";
import FoozleTimers from "./FoozleTimer";
import ConfigFactory from "./ConfigFactory";
import PageTime from "./PageTime";
import VideoProps from "./VideoProps";
let FLS = null;
let FT = null;
let CPO = null;
let CVO = null;
let MO = null;
let CF = null;
let PT = null;
let VP = null;
let configObj = null;
beforeEach(() => {
    CPO = new CreatePageObj();
    CPO.setObj();
    CVO = new CreateVideoObj();
    CVO.setObj();
    MO = new MergeObjs();
    FLS = new FoozleLocalStorage();
    CF = new ConfigFactory();
    configObj = MO.execute(CPO.createObj(), CVO.createObj());
    let page = 'https://testactoapp.com/funster';
    PT = CF.request(PageTime);
    VP = CF.request(VideoProps);
    FLS.init(configObj, page);
    FT = new FoozleTimers(FLS, 0);
});
afterEach(() => {
    FLS = null;
    CPO = null;
    CVO = null;
    MO = null;
    CF = null;
});
describe("Acto Timer", () => {
    test("Should throw exception if an FoozleLocalStorage instance is not passed", () => {
        expect(() => {
            new FoozleTimers({}, 0);
        }).toThrow("The first parameter of FoozleTimer constructor must be an instance of FoozleLocalStorage");
    });
    test("Newly initialized ActoTimer getters should return 0 seconds", () => {
        expect(FT?.getSeconds()).toBe(0);
        expect(FT?.getStoredTime()).toBe(0);
    });
    test("should increment the seconds to 1 from 0 both for the active counter and the stored count", () => {
        expect(FT?.getSeconds()).toBe(0);
        FT?.setTimeStrategy(PT);
        FT?.increment();
        expect(FT?.getSeconds()).toBe(1);
        expect(FT?.getStoredTime()).toBe(1);
    });
    test("Set storage seconds should be set to 9", () => {
        FT?.setSeconds(8);
        FT?.setTimeStrategy(PT);
        FT?.increment();
        expect(FT?.getStoredTime()).toBe(9);
    });
    test("should set the active timer and the stored count to 6 seconds", () => {
        FT?.setSeconds(5);
        FT?.setTimeStrategy(PT);
        FT?.increment();
        expect(FT?.getSeconds()).toBe(6);
        expect(FT?.getStoredTime()).toBe(6);
    });
    test("should return the full config object with the seconds as 8 and the video object with null values", () => {
        FT?.setSeconds(8);
        FT?.setTimeStrategy(PT);
        FT?.increment();
        expect(FT?.getconfigObj()).toStrictEqual({
            seconds: 9,
            video: { isplaying: false, volume: 0, progress: 0, videoname: '' }
        });
    });
    test("should show that Acto Storage and Acto Timer set and show the same video props ", () => {
        let configO = FLS?.get();
        configO = VP?.doAction(configO, 0, true, 30, 5.234, 'fun');
        FLS?.setStorageValues(configO);
        expect(FLS?.get()).toStrictEqual(FT?.getconfigObj());
        expect(FT?.getconfigObj()).toStrictEqual({
            seconds: 0,
            video: { isplaying: true, volume: 30, progress: 5.234, videoname: 'fun' }
        });
    });
});
