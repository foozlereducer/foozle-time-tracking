class CreateActoObjs {
    constructor() {
        this.videoObj.bind(this);
        this.pageObj.bind(this);
    }
    videoObj(isplaying = null, volume = null, progress = null) {
        return {
            isplaying: isplaying,
            volume: volume,
            progress: progress
        };
    }
    pageObj() {
        return {
            seconds: 0
        };
    }
    mergeObjs(aObj, bObjs) {
        return {
            ...aObj,
            ...bObjs
        };
    }
}
export default CreateActoObjs;
