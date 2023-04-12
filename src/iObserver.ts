import { ISubject } from './index';

/**
 * The Observer interface declares the update method, used by subjects.
 */
export interface IObserver {
  // Receive update from subject.
  update(subject: ISubject): void;
}

/**
 * Objservers type that allows to type a value as an array or observers
 */
export type Observers = IObserver[];
