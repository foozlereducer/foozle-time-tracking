import { FoozleEventsBinder, FoozleLocalStorage } from './index';
import { BroadcastChannel } from 'broadcast-channel';
const bc = new BroadcastChannel('FoozleStorageEvent');
const FLS = new FoozleLocalStorage(bc);
let FEB = null;
beforeEach(() => {
    FEB = new FoozleEventsBinder(FLS);
});
afterEach(() => {
    FEB = null;
});
describe('Create Acto Objs', () => {
    test('should set default bind element for events', () => {
        const elements = FEB.getElements();
        expect(elements).toStrictEqual('p, select, button');
    });
    test('should set default bind element for events', () => {
        const binderStatus = FEB.runTimerBinders();
        expect(binderStatus).toStrictEqual(true);
    });
});
//# sourceMappingURL=FoozleEventsBinder.tt.js.map