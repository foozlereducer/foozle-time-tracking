import FoozleTimer from "../FoozleTimer.js"

const channel = new BroadcastChannel('timerChannel');
const FT = new FoozleTimer(channel);


