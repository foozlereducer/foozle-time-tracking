import TimeCoreObjObj from './TimeObjCore';
let CPO: any = null;

beforeEach(() => {
  CPO = new TimeCoreObjObj();
});

afterEach(() => {
  CPO = new TimeCoreObjObj();
});

describe('Create Acto Objs', () => {
  test('should get a default page timing object (in milliseconds)', () => {
    const obj = CPO.setObj();
    expect(obj).toStrictEqual({ milliseconds: 0 });
  });
});
