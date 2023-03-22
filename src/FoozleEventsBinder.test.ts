import { FoozleEventsBinder, FoozleLocalStorage } from "./index";

let FLS = new FoozleLocalStorage();
let FEB: any = null;

beforeEach(() => {
  FEB = new FoozleEventsBinder(FLS);
});

afterEach(() => {
  FEB = null;
});

describe('Create Acto Objs', () => {
  test('should set default bind element for events', () => {
    const elements = FEB.getElements()
    expect(elements).toStrictEqual("p, select, button");
  });
  test('should set default bind element for events', () => {
    const binderStatus = FEB.runTimerBinders()
    expect(binderStatus).toStrictEqual(true);
  });
});


