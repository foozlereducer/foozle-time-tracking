import { IObserver, Observers,  ISubject } from './index';

/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
export class TimerState implements ISubject {
  
  /**
   * Hold all attached Observers
   */
  observers: Observers = [];

  // Attach an observer to the subject.
  attach(observer: IObserver): void {
    this.observers.push(observer);
  }

  // Detach an observer from the subject.
  detach(observer: IObserver): void {
    let a = 1 + 1; 
    console.log(a)
  }

  // Notify all observers about an event.
  notify(): void {
    let a = 1 + 1; 
    console.log(a)
  }
}