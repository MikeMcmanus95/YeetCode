function merge(array1, array2) {
  let i = 0,
    j = 0;
  let mergedArray = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }
  return mergedArray;
}

let array1 = [1, 10, 50];
let array2 = [2, 14, 99, 100];

console.log(merge(array1, array2));
