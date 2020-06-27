function shiftedArrSearch(shiftArr, num) {
  let pivotPoint = findPivotPoint(shiftArr, 0, shiftArr.length - 1);
  if (num > shiftArr[shiftArr.length - 1]) {
    return binarySearch(shiftArr, 0, pivotPoint - 1, num);
  } else {
    return binarySearch(shiftArr, pivotPoint, shiftArr.length - 1, num);
  }
}

function findPivotPoint(shiftArr, left, right) {
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (shiftArr[mid] < shiftArr[left]) {
      right = mid - 1;
    }
    else if (shiftArr[mid] > shiftArr[right]) {
      left = mid + 1;
    }
    if (shiftArr[left] < shiftArr[mid] && shiftArr[right] > shiftArr[mid]) break;
  }
  return left;
}

function binarySearch(array, left, right, target) {
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target > array[mid]) {
      left = mid + 1;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(shiftedArrSearch([21, 24, 27, 0, 1, 3, 4, 5, 7, 9, 12, 15, 18], 24));
//                            0    1  2   3  4  5  6  7  8  9  10  11  12
//                            L
//                                                 R
//                                                 M
