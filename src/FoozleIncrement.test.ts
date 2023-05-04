import { 
  TimeUnitMilliseconds, 
  TimeUnitSeconds, 
  TimeUnitDays, 
  IStrategy, 
  StrategyFactory, 
  FoozleIncrementCore, 
  TimeObjCore, 
  TimeObjVimeo, 
  FoozleIncrementVimeo
} from './index';

let Obj: any;
let TimeInSeconds:IStrategy;
let FCI:FoozleIncrementCore;
let SF:StrategyFactory;

beforeEach(() => {
    SF = new StrategyFactory();
    Obj = SF.request(TimeObjCore)
    Obj.setTimePrecision();
    TimeInSeconds = SF.request(TimeUnitSeconds)
    FCI = new FoozleIncrementCore(TimeInSeconds, Obj);
});

afterEach(() => {
});

describe('Foozle Increment', () => {
  test('should increment the seconds time unit to 1000 milliseconds', () => {
    Obj.setObj(0, 'secondsInMilliseconds');
    expect(FCI.increment()).toStrictEqual({ secondsAsMilliseconds: 1000});
    expect(FCI.increment()).toStrictEqual({ secondsAsMilliseconds: 2000});
    expect(FCI.increment()).toStrictEqual({ secondsAsMilliseconds: 3000});
  });

  test('should increment the milliseconds by 1 milliseconds', () => {
    Obj = SF?.request(TimeObjCore)
    Obj.setObj();
    const TimeInMilliseconds = SF?.request(TimeUnitMilliseconds)
    FCI = new FoozleIncrementCore(TimeInMilliseconds, Obj);
    expect(FCI.increment()).toStrictEqual({ milliseconds: 1});
    expect(FCI.increment()).toStrictEqual({ milliseconds: 2});
    expect(FCI.increment()).toStrictEqual({ milliseconds: 3});
  });

  test('should increment the Days by 8600000 milliseconds', () => {
    Obj = SF.request(TimeObjCore)
    Obj.setObj(0, 'daysAsMilliseconds');
    const TimeInDays= SF.request(TimeUnitDays)
    FCI = new FoozleIncrementCore(TimeInDays, Obj);
    expect(FCI?.doAction()).toStrictEqual({ daysAsMilliseconds: 86400000});
    expect(FCI?.doAction()).toStrictEqual({ daysAsMilliseconds: 172800000});
    expect(FCI?.doAction()).toStrictEqual({ daysAsMilliseconds: 259200000});
  });

  test('vimeo obj should match the passed in values and have calculate milliseconds', () => {
    SF = new StrategyFactory();
    Obj = SF.request(TimeObjVimeo);
    Obj.setTimePrecision(4);
    const FIV = new FoozleIncrementVimeo(TimeInSeconds, Obj);
    const obj = FIV?.doAction(true, 60, 23.47, 'fun-video');
    console.log(obj)
    expect(obj.video.isPlaying).toBe(true);
    expect(obj.video.volume).toBe(60);
    expect(obj.video.progress).toBe(23.47);
    expect(obj.video.videoName).toBe('fun-video');
    expect(typeof(Obj.getType().length)).toBe('number')
  });

});