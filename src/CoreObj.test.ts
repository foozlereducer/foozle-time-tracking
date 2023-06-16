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
    CPO.setObj();
    const obj = CPO.get()
    expect(obj).toStrictEqual({ milliseconds: 0 });
  });
});
