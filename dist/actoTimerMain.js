import ActoLocalStorage from "./ActoLocalStorage";
import CreatePageObj from "./CreatePageObj";
import CreateVideoObj from "./CreateVideoObj";
import MergeObjs from "./MergeObjects";
import ActoTimers from "./ActoTimer";
import ConfigFactory from "./ConfigFactory";
import PageTime from "./PageTime";
const uniqueId = window.location.href;
// Set up the config object that will be stored in local storage
const CPO = new CreatePageObj();
CPO.setObj();
const CVO = new CreateVideoObj();
CVO.setObj();
const MO = new MergeObjs();
const CF = new ConfigFactory();
const configObj = MO.execute(CPO.createObj(), CVO.createObj());
// Set up Acto Local Storage
const ALS = new ActoLocalStorage();
ALS.init(configObj, uniqueId);
const AT = new ActoTimers(ALS, 0);
// Setup page time strrategy
const PT = CF.request(PageTime);
AT.setTimeStrategy(PT);
AT.startTimer();
let vimeovidid = document.addEventListener('vimeo-vid', function (e) {
    console.log('Vimeo Video');
});
