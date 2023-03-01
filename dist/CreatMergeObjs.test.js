import CreatePageObj from './CreatePageObj';
import CreateVideoObj from './CreateVideoObj';
import MergeObjs from './MergeObjects';
let CVO = null;
let CPO = null;
let MO = null;
beforeEach(() => {
    CPO = new CreatePageObj();
    CVO = new CreateVideoObj();
    MO = new MergeObjs();
});
afterEach(() => {
    CPO = new CreatePageObj();
    CVO = new CreateVideoObj();
    MO = new MergeObjs();
});
describe('Create Acto Objs', () => {
    test('should return merged page and video objs', () => {
        CVO.setObj(true, 15, 11.0502, 'abc');
        CPO.setObj();
        const pageObj = CPO.createObj();
        const vidObj = CVO.createObj();
        const mergedObjs = MO.execute(pageObj, vidObj);
        expect(mergedObjs).toStrictEqual({
            seconds: 0,
            video: { isplaying: true, volume: 15, progress: 11.0502, videoname: 'abc' },
        });
    });
});
