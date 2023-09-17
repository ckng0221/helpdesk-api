export function getNonNullObject(obj: object) {
  return Object.keys(obj).reduce((newObj, key) => {
    const value = obj[key];
    if (value !== null && value !== undefined) {
      newObj[key] = value;
    }
    return newObj;
  }, {});
}
