class MergeObjs {
    execute(aObj:object, bObjs:object) {
        return {
          ...aObj,
          ...bObjs
        }
      }
}

export default MergeObjs;