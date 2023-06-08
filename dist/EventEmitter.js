export class EventEmitter {
    target;
    constructor(eventTarget) {
        if (eventTarget instanceof EventTarget) {
            eventTarget = new EventTarget;
        }
        this.target = eventTarget;
    }
    on(eventName, listener) {
        if (typeof eventName !== 'string') {
            throw new Error('Parameter ');
        }
        return this.target.addEventListener(eventName, listener);
    }
    once(eventName, listener) {
        return this.target.addEventListener(eventName, listener, { once: true });
    }
    off(eventName, listener) {
        return this.target.removeEventListener(eventName, listener);
    }
    emit(eventName, listener) {
        return this.target.dispatchEvent(new CustomEvent(eventName, { detail: Object, cancelable: true, bubbles: true }));
    }
}
//# sourceMappingURL=EventEmitter.js.map