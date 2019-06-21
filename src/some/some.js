"use strict";

const some = (arr, func) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("The first parameter must be an array");
  }

  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return true;
    }
  }
  return false;
};

export default some;
