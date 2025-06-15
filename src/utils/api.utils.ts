export const handleObjectEmpty = (obj: any) => {
  if (typeof obj === "object" && Object.keys(obj).length > 0) {
    const cloneObj = { ...obj };

    // remove key from object value empty
    for (const key in cloneObj) {
      if (Object.prototype.hasOwnProperty.call(cloneObj, key)) {
        const element = cloneObj[key];
        if (element === "" || element === null) delete cloneObj[key];
      }
    }
    return cloneObj;
  }
  return {};
};
