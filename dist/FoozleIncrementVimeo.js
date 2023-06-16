import AbsIncrement from "./AbsIncrement";
/**
 * Foozle Increment Vimeo - increments the Vimeo object
 * ****** It's CONSTRUCTOR AND PROPERTIES are defined IN THE ABSTRACT CLASS it extends. *******
 * This allows all of the increment strategies to inherit these class properties, constructor and increment
 */
export class FoozleIncrementVimeo extends AbsIncrement {
    /**
   * Do action - is a strategy enforced function to be guarenteed implement
   * In the case of Vimeo video there is no calculations nessesary as the Vimeo event keeps the progress updated
   * @returns object - a Vimeo timing object
   */
    /**
     * This implementation of doAction is to increment the video object
     * @returns object - A vimeo Time object Literal
     */
    doAction() {
        const objType = this.Obj.getType();
        let vidTimeObj = { type: "" };
        vidTimeObj[typeof objType] = ((vidTimeObj.progress % 1) * 1000).toFixed(vidTimeObj.timePrecision);
        return vidTimeObj;
    }
}
//# sourceMappingURL=FoozleIncrementVimeo.js.map