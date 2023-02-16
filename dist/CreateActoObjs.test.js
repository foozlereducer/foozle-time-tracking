import CreatePageObj from "./CreatePageObj";
import CreateVideoObj from "./CreateVideoObj";
import MergeObjs from "./MergeObjects";
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
describe("Create Acto Objs", () => {
    test("should get a default page timing object (in seconds)", () => {
        CPO.setObj();
        let obj = CPO.createObj();
        expect(obj).toStrictEqual({ seconds: 0 });
    });
    test("should return custom page time object with 'time' being the key", () => {
        CPO.setObj('time');
        let obj = CPO.createObj();
        expect(obj).toStrictEqual({ "time": 0 });
    });
    test("default videoObj should have zeroed values", () => {
        CVO.setObj();
        let obj = CVO.createObj();
        expect(obj).toStrictEqual({ "video": { "isplaying": false, "progress": 0, "volume": 0, "videoname": '' } });
        expect(obj.video.isplaying).toBe(false);
        expect(obj.video.volume).toBe(0);
        expect(obj.video.progress).toBe(0);
        expect(obj.video.videoname).toBe('');
    });
    test("videoObj should return customized isplaying:true, volume: 15 and progress:11.0502", () => {
        CVO.setObj(true, 15, 11.0502, 'abc');
        let obj = CVO.createObj();
        expect(obj).toStrictEqual({ "video": { "isplaying": true, "volume": 15, "progress": 11.0502, "videoname": "abc" } });
    });
    test("should return merged page and video objs", () => {
        CVO.setObj(true, 15, 11.0502, 'abc');
        CPO.setObj();
        let pageObj = CPO.createObj();
        let vidObj = CVO.createObj();
        let mergedObjs = MO.execute(pageObj, vidObj);
        expect(mergedObjs).toStrictEqual({ "seconds": 0, video: { "isplaying": true, "volume": 15, "progress": 11.0502, "videoname": "abc" } });
    });
});
