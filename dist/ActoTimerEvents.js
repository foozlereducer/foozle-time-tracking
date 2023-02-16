class ActoTimerEvents {
    constructor(increment, Timer, element) {
        this.incrementId = null;
        this.incrementId = setInterval(increment, 1000);
        this.element = element;
        this.Timer = Timer;
        this.increment = increment;
    }
    handleMouseMove(document,pageX, pageY) {
        this.element = document.elementFromPoint(pageX, pageY);
        if('IFRAME' == this.element?.nodeName) {
            if(null !==this.incrementId) {
                clearInterval(this.incrementId)
                this.incrementId = null;
            }
        } else {
            let i = this.Timer?.getSeconds()
            if(null == this.incrementId) {
                this.Timer?.storeSeconds(String(i));
                this.incrementId = setInterval(this.increment, 1000);
            }
            console.log(this.element?.nodeName); 
        }
    }
    
    setMouseMove(document, pageX, pageY) {
        this.element.addEventListener('mousemove', this.handleMouseMove(document, pageX, pageY))
    }
}
export {ActoTimerEvents as AEvent}