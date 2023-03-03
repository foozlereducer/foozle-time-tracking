import { FoozleEventsBinder } from "./FoozleEventsBinder";
let FEB: any = null;

beforeEach(() => {
  FEB = new FoozleEventsBinder();
});

afterEach(() => {
  FEB = null;
});

describe('Create Acto Objs', () => {
  test('should set default bind element for events', () => {
    
    const elements = FEB.getElements()
    expect(elements).toStrictEqual("p, select, button");
    //expect(obj.video.isplaying).toBe(false);
  });
});
