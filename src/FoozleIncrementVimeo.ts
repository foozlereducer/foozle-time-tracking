import  { IStrategy, ILooseObject} from "./index"
import AbsIncrement from "./AbsIncrement";

/**
 * Foozle Increment Vimeo - increments the Vimeo object 
 * ****** It's CONSTRUCTOR AND PROPERTIES are defined IN THE ABSTRACT CLASS it extends. *******
 * This allows all of the increment strategies to inherit these class properties, constructor and increment
 */
export class FoozleIncrementVimeo extends AbsIncrement implements IStrategy {

    /**
     * Do action - is a strategy enforced function to be guarenteed implement 
     * In the case of Vimeo video there is no calculations nessesary as the Vimeo event keeps the progress updated
     * @returns object - a Vimeo timing object
     */
    doAction(isPlaying:boolean, volume:number, progress:number, videoName:string ) {
        // Obj.setObj(...) already knows how to format the Obj
        return this.Obj.setObj(isPlaying, volume, progress, videoName, this.TimeUnit.getType())
    }
}