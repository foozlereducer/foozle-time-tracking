import { FoozleTimingUnit, Seconds, Milliseconds, Days} from "./index";
let FTU: any = null;
let SEC:Seconds;
let MSEC:Milliseconds;
let DYS:Days;

beforeEach(() => {
  SEC = new Seconds()
  FTU = new FoozleTimingUnit(SEC);
});

afterEach(() => {
  FTU = new FoozleTimingUnit(SEC);
});

describe('Can create different time units like seconds and microseconds', () => {
  test('should return seconds in the non-decimal number format of 0 or 5', () => {
    expect(FTU.getIncrementUnit()).toBe(1000000)
    expect(FTU.getType()).toBe('seconds')
  });

  test('should return micro-seconds number format of 1000000 ', () => {
    MSEC = new Milliseconds;
    FTU = new FoozleTimingUnit(MSEC);
    expect(FTU.getIncrementUnit()).toBe(1000000)
    expect(FTU.getType()).toBe('milliseconds')
  });


  test('should return days number format of seconds', () => {
    DYS = new Days;
    FTU = new FoozleTimingUnit(DYS);
    expect(FTU.getIncrementUnit()).toBe(86400000)
    expect(FTU.getType()).toBe('day')
  });

});
