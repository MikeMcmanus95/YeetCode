function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let temp = array[i];
      if (array[i] > array[j]) {
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
