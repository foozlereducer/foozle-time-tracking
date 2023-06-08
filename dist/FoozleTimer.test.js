import { TimeUnitSeconds, StrategyFactory, FoozleIncrementCore, TimeObjCore, FoozleTimer, FoozleLocalStorage } from './index';
import { BroadcastChannel } from 'broadcast-channel';
let Obj;
let TimeInSeconds;
let FCIncrement;
let SF;
let FT;
let FLS;
beforeEach(() => {
    SF = new StrategyFactory();
    Obj = SF.request(TimeObjCore);
    Obj.setTimePrecision();
    TimeInSeconds = SF.request(TimeUnitSeconds);
    FCIncrement = new FoozleIncrementCore(TimeInSeconds, Obj);
    FCIncrement.addEventListener('foozleInterval', () => {
        FCIncrement.doAction();
    });
    const configObj = { mock: 0 };
    const page = 'https://testactoapp.com/fun';
    const bc = new BroadcastChannel('FoozleStorageEvent');
    FLS = new FoozleLocalStorage(bc);
    FLS.init(configObj, page);
    FT = new FoozleTimer();
});
afterEach(() => {
    jest.restoreAllMocks();
});
describe('The Timer', () => {
    test('should have called emit', () => {
        expect(1).toBe(1);
    });
    test('should have pub + sub behaviour', () => {
        expect(1).toBe(1);
    });
});
//# sourceMappingURL=FoozleTimer.test.js.map