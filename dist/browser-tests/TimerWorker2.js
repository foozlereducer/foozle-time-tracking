 import FoozleTimer from '../FoozleTimer.js'
import { BroadcastService } from '../BroadcastService.js';
const controls = new BroadcastChannel('controls2');
const bs = new BroadcastService('channel2')
const FT = new FoozleTimer(bs);
const startDateTime = new Date();
FT.startTimer(1000);
const timer = FT.getTimer();

controls.onmessage = (event) => {
  if(event && event.data.msg == 'kill-timer') {
      bs.postMessage({count: (new Date()-startDateTime)/1000})
      FT.stopTimer();
      console.log('killed timer')
  }
}

