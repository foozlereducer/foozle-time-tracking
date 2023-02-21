import CreatePageObj from "./CreatePageObj";
let CPO:any = null;



beforeEach(() => {
    CPO = new CreatePageObj();

});
  
afterEach(() => {
  CPO = new CreatePageObj();
});

describe("Create Acto Objs", () => {
  test("should get a default page timing object (in seconds)", () => {
    CPO.setObj();
    let obj = CPO.createObj()
    expect(obj).toStrictEqual({seconds: 0});
  });

  test("should return custom page time object with 'time' being the key", () => {
    CPO.setObj('time');
    let obj = CPO.createObj();
    expect(obj).toStrictEqual({"time":0});
  });
});