export class EventEmitter {
    target:EventTarget;
    constructor(eventTarget:EventTarget) {
      if (eventTarget !instanceof EventTarget ) {
        eventTarget = new EventTarget;
      }
      this.target = eventTarget;
    }
    on(eventName:string, listener:any) {
      if (typeof eventName !== 'string') {
        throw new Error('Parameter ')
      }
      return this.target.addEventListener(eventName, listener);
    }
    once(eventName:string, listener:any) {
      return this.target.addEventListener(eventName, listener, { once: true });
    }
    off(eventName:string, listener:any) {
      return this.target.removeEventListener(eventName, listener);
    }
    emit(eventName:string, listener:any) {
      return this.target.dispatchEvent(
        new CustomEvent(eventName, { detail:Object, cancelable: true, bubbles: true })
      );
    }
  }