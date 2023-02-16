class ActoTimers {
    i = 0;;
    constructor(i=0) {
        this.i = i;
    }

    increment() {
        this.i++
        this.storeSeconds(String(this.i));
        console.log(this.getSeconds());
    }

    storeSeconds(count, key='actoSeconds') {
        localStorage.setItem(key, count)
    }

    getSeconds(key='actoSeconds') {
        return localStorage.getItem(key)
    }
}

const ATimer = new ActoTimers;