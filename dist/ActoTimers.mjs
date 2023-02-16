"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActoTimers = void 0;
class ActoTimers {
    ;
    constructor(i = 0) {
        this.i = 0;
        this.i = i;
    }
    increment() {
        this.i++;
        this.storeSeconds(String(this.i));
        console.log(this.getSeconds());
    }
    storeSeconds(count, key = 'actoSeconds') {
        localStorage.setItem(key, count);
    }
    getSeconds(key = 'actoSeconds') {
        return localStorage.getItem(key);
    }
}
exports.ActoTimers = ActoTimers;
//# sourceMappingURL=ActoTimers.js.map