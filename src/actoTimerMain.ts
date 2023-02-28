import ActoLocalStorage from "./ActoLocalStorage";
import CreatePageObj from "./CreatePageObj";
import CreateVideoObj from "./CreateVideoObj";
import MergeObjs from "./MergeObjects";
import ActoTimers from "./ActoTimer";
import ConfigFactory from "./ConfigFactory";
import PageTime from "./PageTime";
import VideoProps from "./VideoProps";
const uniqueId = window.location.href;

// Set up the config object that will be stored in local storage
const CPO = new CreatePageObj();
CPO.setObj();
const CVO = new CreateVideoObj();
CVO.setObj();
const MO = new MergeObjs()
const CF = new ConfigFactory();
const configObj = MO.execute(CPO.createObj(), CVO.createObj())

// Set up Acto Local Storage
const ALS = new ActoLocalStorage();
ALS.init(configObj, uniqueId);
const AT = new ActoTimers(ALS, 0)

// Setup page time strrategy
const PT = CF.request(PageTime);

function startTimerInterval(intervalTime=1000) {
    AT.setTimeStrategy(PT)

    // Create the interval by default to iterate every second
    return setInterval(AT.increment, intervalTime);
}
// Start the Acto Page Timer
let incrementId =  startTimerInterval(1000);

let vimeovidid =  document.addEventListener('vimeo-vid', function(e){
    console.log('Vimeo Video')
})



