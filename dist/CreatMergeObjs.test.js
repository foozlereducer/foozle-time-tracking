import CreatePageObj from './TimeObjCore';
import CreateVideoObj from './TimeObjVimeo';
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
        const pageObj = CPO.setObj();
        CVO.setObj(true, 15, 11.0502, 'abc');
        const vidObj = CVO.doAction();
        const mergedObjs = MO.execute(pageObj, vidObj);
        expect(mergedObjs).toStrictEqual({
            milliseconds: 50.2,
            video: { isPlaying: true, volume: 15, progress: 11.0502, videoName: 'abc' },
        });
    });
});
//# sourceMappingURL=CreatMergeObjs.test.js.map