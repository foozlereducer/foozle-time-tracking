import { TimeUnitMilliseconds, TimeUnitSeconds, TimeUnitDays, StrategyFactory, FoozleIncrementCore, TimeObjCore, TimeObjVimeo, FoozleIncrementVimeo } from './index';
let Obj;
let TimeInSeconds;
let FCIncrement;
let SF;
beforeEach(() => {
    SF = new StrategyFactory();
    Obj = SF.request(TimeObjCore);
    Obj.setTimePrecision();
    TimeInSeconds = SF.request(TimeUnitSeconds);
    FCIncrement = new FoozleIncrementCore(TimeInSeconds, Obj);
});
afterEach(() => {
});
describe('Foozle Increment', () => {
    test('should doAction the seconds time unit to 1000 milliseconds', () => {
        Obj.setObj(0, 'secondsInMilliseconds');
        expect(FCIncrement.doAction()).toStrictEqual({ secondsAsMilliseconds: 1000 });
        expect(FCIncrement.doAction()).toStrictEqual({ secondsAsMilliseconds: 2000 });
        expect(FCIncrement.doAction()).toStrictEqual({ secondsAsMilliseconds: 3000 });
    });
    test('should doAction the milliseconds by 1 milliseconds', () => {
        Obj = SF?.request(TimeObjCore);
        Obj.setObj();
        const TimeInMilliseconds = SF?.request(TimeUnitMilliseconds);
        FCIncrement = new FoozleIncrementCore(TimeInMilliseconds, Obj);
        expect(FCIncrement.doAction()).toStrictEqual({ milliseconds: 1 });
        expect(FCIncrement.doAction()).toStrictEqual({ milliseconds: 2 });
        expect(FCIncrement.doAction()).toStrictEqual({ milliseconds: 3 });
    });
    test('should doAction the Days by 8600000 milliseconds', () => {
        Obj = SF.request(TimeObjCore);
        Obj.setObj(0, 'daysAsMilliseconds');
        const TimeInDays = SF.request(TimeUnitDays);
        FCIncrement = new FoozleIncrementCore(TimeInDays, Obj);
        expect(FCIncrement?.doAction()).toStrictEqual({ daysAsMilliseconds: 86400000 });
        expect(FCIncrement?.doAction()).toStrictEqual({ daysAsMilliseconds: 172800000 });
        expect(FCIncrement?.doAction()).toStrictEqual({ daysAsMilliseconds: 259200000 });
    });
    test('vimeo obj should match the passed in values and have calculate milliseconds', () => {
        SF = new StrategyFactory();
        Obj = SF.request(TimeObjVimeo);
        Obj.setTimePrecision(4);
        Obj.setObj(true, 60, 23.47, 'fun-video');
        const FIV = new FoozleIncrementVimeo(TimeInSeconds, Obj);
        const obj = FIV?.doAction();
        expect(obj.video.isPlaying).toBe(true);
        expect(obj.video.volume).toBe(60);
        expect(obj.video.progress).toBe(23.47);
        expect(obj.video.videoName).toBe('fun-video');
        expect(typeof (Obj.getType().length)).toBe('number');
        Obj.setObj(true, 60, 0, 'fun-video');
        const obj2 = FIV?.doAction();
        expect(obj2.video.progress).toStrictEqual(0.00);
    });
});
//# sourceMappingURL=FoozleIncrement.test.js.map