// AlgoExpert URL:
// Whenever you have one num in an array thats not sorted, you actually have 2
// If one num is out of order, it could mean that a huge subarray needs to be sorted

// O(n) Time | O(1) Space
function subarraySort(array) {
  let minOutOfOrder = Infinity,
    maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }
  if (minOutOfOrder === Infinity) return [-1, -1];
  let subarrayLeftIdx = 0;
  while (minOutOfOrder >= array[subarrayLeftIdx]) {
    subarrayLeftIdx++;
  }
  let subarrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subarrayRightIdx]) {
    subarrayRightIdx--;
  }

  return [subarrayLeftIdx, subarrayRightIdx];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) {
    return num > array[i + 1];
  }
  if (i === array.length - 1) {
    return num < array[i - 1];
  }
  return num > array[i + 1] || num < array[i - 1];
}
