import AbsIncrement from "./AbsIncrement.js";
/**
 * Foozle Increment Core - increments the TimeCore object
 * ****** It's CONSTRUCTOR AND PROPERTIES are defined IN THE ABSTRACT CLASS it extends. *******
 * This allows all of the increment strategies to inherit these class properties, constructor and increment
 */
export class FoozleIncrementCore extends AbsIncrement {
    /**
     * Do action - is a strategy enforced function to be guarenteed implement
     * It should alwasy contain the primary calculations or algorhythms so if it is called
     * directly it will provide the correct value.
     * @returns object - a Core timing object
     */
    doAction() {
        return this.Obj.setObj(this.Obj.getTime() + this.TimeUnit.getIncrementUnit(), this.TimeUnit.getType());
    }
    handleEvent(e) {
        console.log('in Increment Core caught becond', e);
        if ('FoozleInterval' === e.type) {
            this.doAction();
            console.log('in increment');
        }

        const target = new EventTarget();
        target.addEventListener('foozleInterval', console.log);
    }
}
//# sourceMappingURL=FoozleIncrementCore.js.map