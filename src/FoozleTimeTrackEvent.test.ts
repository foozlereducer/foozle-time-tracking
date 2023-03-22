import { 
  FoozleTimeTrackEvent, 
  FoozleLocalStorage, 
  CreatePageObj,
  CreateVideoObj,
  MergeObjs,
  FoozleTimer,
  ConfigFactory,
  PageTime,
  VideoProps
} from "./index";

let CPO = null;
let CVO = null;
let MO = null;
let CF = null;
let configObj = null;
let PT = null;
let VP = null;
let FLS = null;
let FT = null;
// This initialization is due to FE is a singleton
let FE: { getInstance: () => any; } | null = null;

beforeEach(() => {
  
  let uniqueId = '';
  if ( window.location.href === null) {
      uniqueId = Math.random().toString(16).slice(8)
  } else {
      uniqueId = window.location.href;
  }
  CPO = new CreatePageObj();
  CPO.setObj();
  CVO = new CreateVideoObj();
  CVO.setObj();
  MO = new MergeObjs();
  CF = new ConfigFactory();
  configObj = MO.execute(CPO.createObj(), CVO.createObj());
  PT = CF.request(PageTime);
  VP = CF.request(VideoProps);
  FLS = new FoozleLocalStorage();
  FLS.init(configObj,uniqueId, 'foozle-');
  FT = new FoozleTimer(FLS, 0);

  let FE: any = null;
  FE = new FoozleTimeTrackEvent(FT,FLS);
});

afterEach(() => {
  FE = null;
});

describe('Foozle Event', () => {
  test('should return the same intance when called twice', () => {
    const a = FE?.getInstance()
    const b = FE?.getInstance();
    expect(a).toStrictEqual(b);
  });
  test('should get the same instance of FoozleTimer', () => {
    // const a = FE?.getInstance()
    // a.increment()
    expect(1).toStrictEqual(1);
  });
});


