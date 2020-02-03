function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0) {
      if (array[j] < array[j - 1]) {
        swap(j, j - 1, array);
      }
      j--;
    }
  }
  return array;
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
}
