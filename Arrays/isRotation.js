
const arrA = [1, 2, 3, 4, 5, 6, 7]
const arrB = [4, 5, 6, 7, 1, 2, 3]

function isRotation(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;
  let visitedCount = null;
  let endIdxA = arrA.length;
  let currentIdxA = 0;
  let currentIdxB = 0
  while (visitedCount < arrA.length) {
    if (arrA[currentIdxA] !== arrB[currentIdxB]) {
      if (!visitedCount) currentIdxA++;
      else return false;
    }
    else {
      currentIdxA++;
      currentIdxB++;
      visitedCount += 1;
    }

    // If we hit the end of Array A, but still have elements left in Array B
    if (currentIdxA === endIdxA && currentIdxB > 0 && currentIdxB < arrB.length - 1) {
      endIdxA = currentIdxB;
      currentIdxA = 0;
    }
  }

  return true;
}

console.log(isRotation(arrA, arrB));
