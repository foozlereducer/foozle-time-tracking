import { TimeUnitSeconds, StrategyFactory, FoozleIncrementCore, TimeObjCore, FoozleTimer, FoozleLocalStorage, } from './index';
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
    const configObj = { mock: 0 };
    const page = 'https://testactoapp.com/fun';
    FLS = new FoozleLocalStorage();
    FLS.init(configObj, page);
    FT = new FoozleTimer();
});
afterEach(() => {
    jest.restoreAllMocks();
});
describe('Timer', () => {
    test('should fire and "foozleInterval" event', () => {
        const dispatchEventSpy = jest.spyOn(FT, 'timeBecon');
        FT.timeBecon();
        expect(dispatchEventSpy).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=FoozleTimer.test.js.map