
/**
 * Is Class - can be used to test if the passed instance of the class is a specific type.
 * @param obj
 * @returns
 */
function classIsInstance(obj: any) {
  const isCtorClass = obj.constructor && obj.constructor.toString().substring(0, 5) === 'class';
  if (obj.prototype === undefined) {
    return isCtorClass;
  }
  const isPrototypeCtorClass =
    obj.prototype.constructor &&
    obj.prototype.constructor.toString &&
    obj.prototype.constructor.toString().substring(0, 5) === 'class';
  return isCtorClass || isPrototypeCtorClass;
}

/**
 * Is JSON - utility function
 * @param str - to test if or if not is JSON
 * @returns bool - true if it is JSON and false if it is Not JSON
 */
function isJson(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

/**
 * Generate Uniqque Id - creates a unix time stamp to provide somewhat uniqueness
 * @returns 
 */
function generateUniqueId():string {
  const date = new Date();
  return Math.floor(date.getTime()/1000).toString()
}

export { classIsInstance, isJson, generateUniqueId }
