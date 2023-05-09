import {IStrategy} from "./index"
import AbsIncrement from "./AbsIncrement";

/**
 * Foozle Increment Core - increments the TimeCore object 
 * ****** It's CONSTRUCTOR AND PROPERTIES are defined IN THE ABSTRACT CLASS it extends. *******
 * This allows all of the increment strategies to inherit these class properties, constructor and increment
 */
export class FoozleIncrementCore extends AbsIncrement implements IStrategy {
    /**
     * Do action - is a strategy enforced function to be guarenteed implement 
     * It should alwasy contain the primary calculations or algorhythms so if it is called 
     * directly it will provide the correct value.
     * @returns object - a Core timing object
     */
    doAction():object {
        return this.Obj.setObj(this.Obj.getTime() + this.TimeUnit.getIncrementUnit(), this.TimeUnit.getType())
    }
}