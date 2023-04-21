import TimeCoreObj from './TimeCoreObj';
import {TimeUnitMilliseconds, TimeUnitSeconds, TimeUnitDays, IStrategy, StrategyFactory, FoozleCoreIncrement} from './index';

let Obj: any | null;
let TimeInSeconds:IStrategy | null;
let FCI:FoozleCoreIncrement | null;
let SF:StrategyFactory | null;
beforeEach(() => {
    SF = new StrategyFactory();
    Obj = SF.request(TimeCoreObj)
    Obj.setObj();
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
    expect(FCI?.increment()).toStrictEqual({ milliseconds: 1000});
    expect(FCI?.increment()).toStrictEqual({ milliseconds: 2000});
    expect(FCI?.increment()).toStrictEqual({ milliseconds: 3000});
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

});