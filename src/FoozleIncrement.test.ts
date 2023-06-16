import { 
  TimeUnitMilliseconds, 
  TimeUnitSeconds, 
  TimeUnitDays, 
  IStrategy, 
  StrategyFactory, 
  FoozleIncrementCore, 
  TimeObjCore, 
  TimeObjVimeo, 
  FoozleIncrementVimeo,
  ITimingUnit,
  AbsObj
} from './index';

let Obj:AbsObj;
let TimeInSeconds:ITimingUnit;
let FCIncrement:FoozleIncrementCore;
let SF:StrategyFactory;

beforeEach(() => {
    TimeInSeconds = new TimeUnitSeconds();
    Obj = new TimeObjCore();
    Obj.setTimePrecision();
    Obj.setObj(0, 'secondsAsMilliseconds');
    FCIncrement = new FoozleIncrementCore(TimeInSeconds, Obj);
});

afterEach(() => {
});

describe('Foozle Increment', () => {
  test('should doAction the seconds time unit to 1000 milliseconds', () => {
    expect(FCIncrement.increment()).toStrictEqual({ secondsAsMilliseconds: 1000});
    expect(FCIncrement.increment()).toStrictEqual({ secondsAsMilliseconds: 2000});
    expect(FCIncrement.increment()).toStrictEqual({ secondsAsMilliseconds: 3000});
  });

  // test('should doAction the milliseconds by 1 milliseconds', () => {
  //   Obj = new TimeObjCore()
  //   Obj.setObj(0, 'secondsAsMilliseconds');
  //   const TimeInMilliseconds = new TimeUnitMilliseconds()
  //   FCIncrement = new FoozleIncrementCore(TimeInMilliseconds, Obj);
  //   expect(FCIncrement.doAction()).toStrictEqual({ milliseconds: 1});
  //   expect(FCIncrement.doAction()).toStrictEqual({ milliseconds: 2});
  //   expect(FCIncrement.doAction()).toStrictEqual({ milliseconds: 3});
  // });

  // test('should doAction the Days by 8600000 milliseconds', () => {
  //   Obj = new TimeObjCore()
  //   Obj.setObj(0, 'daysAsMilliseconds');
  //   const TimeInDays= new TimeUnitDays();
  //   FCIncrement = new FoozleIncrementCore(TimeInDays, Obj);
  //   expect(FCIncrement?.doAction()).toStrictEqual({ daysAsMilliseconds: 86400000});
  //   expect(FCIncrement?.doAction()).toStrictEqual({ daysAsMilliseconds: 172800000});
  //   expect(FCIncrement?.doAction()).toStrictEqual({ daysAsMilliseconds: 259200000});
  // });

  // test('vimeo obj should match the passed in values and have calculate milliseconds', () => {
  //   const Obj:AbsObj = new TimeObjVimeo();
  //   Obj.setTimePrecision(4);
  //   Obj.setObj(true, 60, 23.47, 'fun-video')
  //   const FIV = new FoozleIncrementVimeo(TimeInSeconds, Obj);
  //   const obj = FIV?.doAction();
  //   expect(obj.video.isPlaying).toBe(true);
  //   expect(obj.video.volume).toBe(60);
  //   expect(obj.video.progress).toBe(23.47);
  //   expect(obj.video.videoName).toBe('fun-video');
  //   expect(typeof(Obj.getType().length)).toBe('number')
  //   Obj.doAction();
  //   const obj2 = FIV?.doAction();
  //   expect(obj2.video.progress).toStrictEqual(0.00);
  // });

});