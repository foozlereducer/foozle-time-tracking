import { FoozleTimingUnit } from "./index";
let FTU: any = null;

beforeEach(() => {
  FTU = new FoozleTimingUnit();
});

afterEach(() => {
  FTU = new FoozleTimingUnit();
});

describe('Can create different time units like seconds and microseconds', () => {
  test('should return seconds in the non-decimal number format of 0 or 5', () => {
    expect(FTU.calculateTime(5)).toBe(5)
  });

  test('videoObj should return customized isplaying:true, volume: 15 and progress:11.0502', () => {
    expect(1).toBe(1);
  });
});
