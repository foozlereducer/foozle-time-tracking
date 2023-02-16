// https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests/41434763#41434763
class LocalStorageMock {
    store;
    length;
    constructor() {
        this.store = {};
        this.length = 0;
    }
    key(n) {
        if (typeof n === 'undefined') {
            throw new Error("Uncaught TypeError: Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present.");
        }
        if (n >= Object.keys(this.store).length) {
            return null;
        }
        return Object.keys(this.store)[n];
    }
    getItem(key) {
        if (!Object.keys(this.store).includes(key)) {
            return null;
        }
        return this.store[key];
    }
    setItem(key, value) {
        if (typeof key === 'undefined' && typeof value === 'undefined') {
            throw new Error("Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 0 present.");
        }
        if (typeof value === 'undefined') {
            throw new Error("Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present.");
        }
        if (!key)
            return undefined;
        this.store[key] = value.toString() || '';
        this.length = Object.keys(this.store).length;
        return undefined;
    }
    removeItem(key) {
        if (typeof key === 'undefined') {
            throw new Error("Uncaught TypeError: Failed to execute 'removeItem' on 'Storage': 1 argument required, but only 0 present.");
        }
        delete this.store[key];
        this.length = Object.keys(this.store).length;
        return undefined;
    }
    clear() {
        this.store = {};
        this.length = 0;
        return undefined;
    }
}
export const getLocalStorageMock = () => {
    return new LocalStorageMock();
};
global.localStorage = new LocalStorageMock();
