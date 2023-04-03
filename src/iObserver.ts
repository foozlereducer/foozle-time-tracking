import { ISubject } from './index';

/**
 * The Observer interface declares the update method, used by subjects.
 */
export interface IObserver {
  // Receive update from subject.
  update(subject: ISubject): void;
}

export type Observers = IObserver[];
