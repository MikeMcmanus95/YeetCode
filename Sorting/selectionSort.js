function selectionSort(arr) {
  let mindex = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[mindex] > arr[j]) {
        mindex = j;
      }
    }
    swap(i, mindex, arr);
  }
  return arr;
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

let arr = [5, 4, 2, 1, 3];
console.log(selectionSort(arr));
