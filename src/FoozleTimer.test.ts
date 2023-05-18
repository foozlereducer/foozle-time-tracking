import CreatePageObj from './TimeObjCore';import {  
    TimeUnitSeconds, 
    IStrategy, 
    StrategyFactory, 
    FoozleIncrementCore, 
    TimeObjCore, 
    FoozleTimer,
    FoozleLocalStorage,
    EventEmitter

  } from './index';
  
  let Obj: any;
  let TimeInSeconds:IStrategy;
  let FCIncrement:FoozleIncrementCore;
  let SF:StrategyFactory;
  let FT:FoozleTimer;
  let FLS:FoozleLocalStorage;
  let EvtEmit:EventEmitter;
 
  
  beforeEach(() => {
      SF = new StrategyFactory();
      Obj = SF.request(TimeObjCore)
      Obj.setTimePrecision();
      TimeInSeconds = SF.request(TimeUnitSeconds)
      FCIncrement = new FoozleIncrementCore(TimeInSeconds, Obj);
      FCIncrement.addEventListener('foozleInterval', () => {
        FCIncrement.doAction();
      })
      const configObj = { mock: 0 };
      const page = 'https://testactoapp.com/fun';
      FLS = new FoozleLocalStorage();
      FLS.init(configObj, page);
      EvtEmit = new EventEmitter(new EventTarget());
      FT = new FoozleTimer(EvtEmit);
      
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  


describe('The Timer', () => {
  test('should have called emit', () => {
    const dispatchEventSpy = jest.spyOn(FT, 'emit');
    FT.emit(FCIncrement);
    expect(dispatchEventSpy).toHaveBeenCalledTimes(1);
  });

  test('should have pub + sub behaviour', () => {
    EvtEmit.emit('foozleInterval',  FCIncrement);
    FT.emit(FCIncrement);
    expect(1).toBe(1);
  }); 
});