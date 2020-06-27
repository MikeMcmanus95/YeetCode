function findThreeLargestNumbers(array) {
  let max = [array[0], array[1], array[2]];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max[0] && array[i] < max[1]) {
      max[0] = array[i];
    } else if (array[i] > max[1] && array[i] < max[2]) {
      let temp = max[1];
      max[1] = array[i];
      max[0] = temp;
    } else if (array[i] > max[2]) {
      let temp = max[2];
      max[2] = array[i];
      max[0] = max[1];
      max[1] = temp;
    }
  }
  return max;
}
