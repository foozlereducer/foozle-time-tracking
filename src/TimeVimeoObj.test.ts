import TimeVideoObj from './TimeVimeoObj';
let VO: any = null;

beforeEach(() => {
  VO = new TimeVideoObj();
});

afterEach(() => {
  VO = new TimeVideoObj();
});

describe('Create Acto Objs', () => {
  test('default videoObj should have zeroed values', () => {
    VO.setObj();
    const obj = VO.createObj();
    expect(obj).toStrictEqual({ video: { isplaying: false, progress: 0, volume: 0, videoname: '' } });
    expect(obj.video.isplaying).toBe(false);
    expect(obj.video.volume).toBe(0);
    expect(obj.video.progress).toBe(0);
    expect(obj.video.videoname).toBe('');
  });

  test('videoObj should return customized isplaying:true, volume: 15 and progress:11.0502', () => {
    VO.setObj(true, 15, 11.0502, 'abc');
    const obj = VO.createObj();
    expect(obj).toStrictEqual({ video: { isplaying: true, volume: 15, progress: 11.0502, videoname: 'abc' } });
  });
});
