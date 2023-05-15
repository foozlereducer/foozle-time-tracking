/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
export class TimerState {
    /**
     * Hold all attached Observers
     */
    observers = [];
    // Attach an observer to the subject.
    attach(observer) {
        this.observers.push(observer);
    }
    // Detach an observer from the subject.
    detach(observer) {
        let a = 1 + 1;
    }
    // Notify all observers about an event.
    notify() {
        let a = 1 + 1;
    }
}
//# sourceMappingURL=TimerState.js.map