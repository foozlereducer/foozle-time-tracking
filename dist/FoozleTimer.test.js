import { FoozleLocalStorage, TimeCoreObj, TimeVimeoObj, MergeObjs, FoozleTimer, ConfigFactory, TimeUnitSeconds } from './index';
let FLS = null;
let FT = null;
let TCO;
let TVP = null;
let MO = null;
let CF;
let configObj;
let Sec;
let MSec;
let Dys;
beforeEach(() => {
    TCO = new TimeCoreObj();
    TCO.setObj();
    TVP = new TimeVimeoObj();
    TVP.setObj();
    Sec = new TimeUnitSeconds();
    MO = new MergeObjs();
    FLS = new FoozleLocalStorage();
    CF = new ConfigFactory();
    configObj = MO.execute(TCO.createObj(), TVP.createObj());
    const page = 'https://testactoapp.com/funster';
    FLS.init(configObj, page);
    FT = new FoozleTimer(FLS, Sec);
});
afterEach(() => {
});
describe('Acto Timer', () => {
    test('Should throw exception if an FoozleLocalStorage instance is not passed', () => {
        expect(() => {
            const FTimer = new FoozleTimer({}, Sec);
        }).toThrow('The first parameter of FoozleTimer constructor must be an instance of FoozleLocalStorage');
    });
    test('Newly initialized ActoTimer getters should return 0 seconds', () => {
        expect(FT?.getSeconds()).toBe(0);
        expect(FT?.getStoredTime()).toBe(0);
    });
    test('should increment the seconds to 1 from 0 both for the active counter and the stored count', () => {
        expect(FT?.getSeconds()).toBe(0);
        FT?.increment();
        expect(FT?.getSeconds()).toBe(1000);
        expect(FT?.getStoredTime()).toBe(1000);
    });
    test('Set storage seconds should be set to 9', () => {
        FT?.setSeconds(8);
        FT?.increment();
        expect(FT?.getStoredTime()).toBe(9);
    });
    test('should set the active timer and the stored count to 6 seconds', () => {
        FT?.setSeconds(5);
        FT?.increment();
        expect(FT?.getSeconds()).toBe(6);
        expect(FT?.getStoredTime()).toBe(6);
    });
    test('should return the full config object with the seconds as 8 and the video object with null values', () => {
        FT?.setSeconds(8);
        FT?.increment();
        expect(FT?.getconfigObj()).toStrictEqual({
            seconds: 9,
            video: { isplaying: false, volume: 0, progress: 0, videoname: '' },
        });
    });
    test('should show that Acto Storage and Acto Timer set and show the same video props ', () => {
        let configO = FLS?.get();
        configO = TVP?.doAction(true, 30, 0, 'a fun video');
        FLS?.setValue(configO);
        expect(FLS?.get()).toStrictEqual(FT?.getconfigObj());
        expect(FT?.getconfigObj()).toStrictEqual({
            seconds: 0,
            video: { isplaying: true, volume: 30, progress: 5.234, videoname: 'fun' },
        });
    });
});
//# sourceMappingURL=FoozleTimer.test.js.map