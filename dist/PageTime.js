/**
 * Page Time is a concrete strategy that will manage the page time
 */
class PageTime {
    /**
     *
     * @param timeObj - as the time object literal.
     */
    doAction(timeObj, counter) {
        timeObj.seconds = counter;
        return timeObj;
    }
}
export default PageTime;
//# sourceMappingURL=PageTime.js.map