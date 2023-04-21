import AbsIncrement from "./AbsIncrement";
/**
 * Foozle Core Increment - increments the TimeCore object
 * It's constructor and properties are defined in the abstract class it extends.
 * This allows all of the increment strategies to inherit these class properties, constructor and increment
 */
export class FoozleCoreIncrement extends AbsIncrement {
    /**
     * Increment - is responsible to increment time by the base increment unit.
     * The increement unit will be used by the JS timer events so in doing this we keep the
     * increment in sync with the set timer event
     * @returns Object
     */
    increment() {
        return this.doAction();
    }
    /**
     * Do action - is a strategy enforced function to be guarenteed implement
     * It should alwasy contain the primary calculations or algorhythms so if it is called
     * directly it will provide the correct value.
     * @returns object - a Core timing object
     */
    doAction() {
        return this.Obj.setObj(this.Obj.getTime() + this.TimeUnit.getIncrementUnit());
    }
}
//# sourceMappingURL=FoozleCoreIncrement.js.map