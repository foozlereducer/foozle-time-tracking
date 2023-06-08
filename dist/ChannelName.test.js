import { ChannelName } from "./ChannelName";
let CN = '';
beforeEach(() => {
    CN = new ChannelName();
});
afterEach(() => {
});
describe('ChannelName ...', () => {
    test('should return the default Channel Name as "FoozleTimer"', () => {
        expect(CN.getChannelName()).toStrictEqual("FoozleTimer");
    });
    test('should return a custom Channel Name', () => {
        CN = new ChannelName('FunWithFoozle');
        expect(CN.getChannelName()).toStrictEqual("FunWithFoozle");
    });
});
//# sourceMappingURL=ChannelName.test.js.map