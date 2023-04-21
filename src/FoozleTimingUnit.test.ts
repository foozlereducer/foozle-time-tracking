import { TimeUnitSeconds, TimeUnitMilliseconds, TimeUnitDays} from "./index";

let SEC:TimeUnitSeconds;
let MSEC:TimeUnitMilliseconds;
let DYS:TimeUnitDays;

beforeEach(() => {
  SEC = new TimeUnitSeconds();
  MSEC = new TimeUnitMilliseconds()
  DYS = new TimeUnitDays();
});

afterEach(() => {

});

describe('Can create different time units like seconds and microseconds', () => {
  test('should return seconds in the non-decimal number format of 0 or 5', () => {
    expect(SEC.getIncrementUnit()).toBe(1000)
    expect(SEC.getType()).toBe('seconds')
  });

  test('should return micro-seconds number format of 1', () => {
    expect(MSEC.getIncrementUnit()).toBe(1)
    expect(MSEC.getType()).toBe('milliseconds')
  });


  test('should return days number format of seconds', () => {
    expect(DYS.getIncrementUnit()).toBe(86400000)
    expect(DYS.getType()).toBe('days')
  });

});
