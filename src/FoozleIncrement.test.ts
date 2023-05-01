import TimeCoreObj from './TimeCoreObj';
import {TimeUnitMilliseconds, TimeUnitSeconds, TimeUnitDays, IStrategy, StrategyFactory, FoozleCoreIncrement} from './index';

let Obj: any | null;
let TimeInSeconds:IStrategy | null;
let FCI:FoozleCoreIncrement | null;
let SF:StrategyFactory | null;
beforeEach(() => {
    SF = new StrategyFactory();
    Obj = SF.request(TimeCoreObj)
    TimeInSeconds = SF.request(TimeUnitSeconds)
    FCI = new FoozleCoreIncrement(TimeInSeconds, Obj);
});

afterEach(() => {
  Obj = null;
  TimeInSeconds = null;
  SF = null;
  FCI = null;
});

describe('Foozle Increment', () => {
  test('should increment the seconds time unit to 1000 milliseconds', () => {
    Obj.setObj(0, 'secondsInMilliseconds');
    expect(FCI?.increment()).toStrictEqual({ secondsAsMilliseconds: 1000});
    expect(FCI?.increment()).toStrictEqual({ secondsAsMilliseconds: 2000});
    expect(FCI?.increment()).toStrictEqual({ secondsAsMilliseconds: 3000});
  });

  test('should increment the milliseconds by 1 milliseconds', () => {
    Obj = SF?.request(TimeCoreObj)
    Obj.setObj();
    const TimeInMilliseconds = SF?.request(TimeUnitMilliseconds)
    FCI = new FoozleCoreIncrement(TimeInMilliseconds, Obj);
    expect(FCI?.increment()).toStrictEqual({ milliseconds: 1});
    expect(FCI?.increment()).toStrictEqual({ milliseconds: 2});
    expect(FCI?.increment()).toStrictEqual({ milliseconds: 3});
  });

  test('should increment the Days by 8600000 milliseconds', () => {
    Obj = SF?.request(TimeCoreObj)
    Obj.setObj(0, 'daysAsMilliseconds');
    const TimeInDays= SF?.request(TimeUnitDays)
    FCI = new FoozleCoreIncrement(TimeInDays, Obj);
    expect(FCI?.increment()).toStrictEqual({ daysAsMilliseconds: 86400000});
    expect(FCI?.increment()).toStrictEqual({ daysAsMilliseconds: 172800000});
    expect(FCI?.increment()).toStrictEqual({ daysAsMilliseconds: 259200000});
  });

});