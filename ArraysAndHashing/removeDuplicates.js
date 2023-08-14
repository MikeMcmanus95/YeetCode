// Remove Duplicates (Google Interview Question)
// Time: O(n) | Space: O(2n) worst case if no dupes

function removeDuplicates(arr, opt_rv, opt_hashFn) {
  let returnArray = opt_rv || arr;
  const defaultHashFn = function (item) {
    // Prefix each type with a single character representing the type to
    // prevent conflicting keys (e.g. true and 'true').
    return (typeof item).charAt(0) + item;
  };
  let hashFn = opt_hashFn || defaultHashFn;

  let seen = {},
    cursorInsert = 0,
    cursorRead = 0;
  while (cursorRead < arr.length) {
    let current = arr[cursorRead++];
    let key = hashFn(current);
    if (!seen.hasOwnProperty(key)) {
      seen[key] = true;
      returnArray[cursorInsert++] = current;
    }
  }
  returnArray.length = cursorInsert;
}

let array = [400, 234, 105, 400, 116, 234, 118, 12];
console.log(array);
removeDuplicates(array); // [400, 234, 105, 116, 118, 12]
console.log(array);
