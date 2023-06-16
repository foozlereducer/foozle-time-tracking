
import {  
    TimeUnitSeconds, 
    IStrategy, 
    StrategyFactory, 
    FoozleIncrementCore, 
    TimeObjCore, 
    FoozleTimer,
    FoozleLocalStorage

  } from './index';
  import { BroadcastChannel } from 'broadcast-channel';
  
  let Obj: any;
  let TimeInSeconds:IStrategy;
  let FCIncrement:FoozleIncrementCore;
  let SF:StrategyFactory;
  let FT:FoozleTimer;
  let FLS: any = null;
  
  beforeEach(() => { 
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  


describe('The Timer', () => {
  test('should have called emit', () => {
    expect(1).toBe(1);
  });

  test('should have pub + sub behaviour', () => {
    expect(1).toBe(1);
  }); 
});