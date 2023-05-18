export class EventEmitter {
    target;
    constructor() {
        this.target = new EventTarget();
    }
    on(eventName, listener) {
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