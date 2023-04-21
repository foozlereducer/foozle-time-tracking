import TimeCoreObjObj from './TimeCoreObj';
let CPO = null;
beforeEach(() => {
    CPO = new TimeCoreObjObj();
});
afterEach(() => {
    CPO = new TimeCoreObjObj();
});
describe('Create Acto Objs', () => {
    test('should get a default page timing object (in milliseconds)', () => {
        CPO.setObj();
        const obj = CPO.createObj();
        expect(obj).toStrictEqual({ milliseconds: 0 });
    });
});
//# sourceMappingURL=CoreObj.test.js.map