// Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns
// an array of all passport numbers that are both in arr1 and arr2.Note that the output array should be sorted
// in an ascending order.

// Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space
// complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much
// bigger than arr1.

// SOLUTION 1:
// This works well, but can be optimized further. If M is much larger than N, we end up traversing M
// in linear time, which is not optimal for a sorted array. Instead, we can tweak our algorithm to
// use binary search at every element of N to traverse M for a total time of O(n log m)
// Time O(max(n, m)) | Space O(1)
function findDuplicates(arr1, arr2) {
  let i = 0;
  let j = 0;
  const resultArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) i++;
    else if (arr1[i] > arr2[j]) j++;
    else {
      resultArray.push(arr1[i]);
      i++;
      j++;
    }
  }
  return resultArray;
}


// SOLUTION 2:
// Time O(n log(m)) | Space O(1)
// For each iteration of the shorter array, we perform a binary search on the longer
// array. This prevents us from traversing the long array in linear time. Resulting
// in a much better time complexity when dealing with larger datasets.
function findDuplicatesBS(arr1, arr2) {
  let longArr = Math.max(arr1.length, arr2.length);
  let shortArr = Math.min(arr1.length, arr2.length);
  let resultArr = [];
  let i = 0, leftIdx = 0, midIdx = null, rightIdx = longArr.length - 1;
  while (i < shortArr.length) {
    midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (longArr[midIdx] > shortArr[i]) {
      if (midIdx - 1 < 0) {
        i++;
        leftIdx = 0;
        rightIdx = longArr.length;
      }
      else rightIdx = midIdx - 1;
    }
    else if (longArr[midIdx] < shortArr[i]) {
      if (midIdx + 1 > longArr.length) break;
      leftIdx = midIdx + 1;
    }
    else {
      resultArr.push(short[i]);
      leftIdx = midIdx + 1;
      rightIdx = longArr.length;
    }
  }
  return resultArr;
}


function testFindDuplicates(arrayA, arrayB, commonValues) {
  let resultArr = findDuplicatesBS(arrayA, arrayB);
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] !== commonValues[i]) {
      return ('Test failed. Expected ', resultArr[i], ' to equal ',
        commonValues[i]);
    }
  }

  return true;
}

console.log(testFindDuplicates([1, 2, 4, 5, 9, 10], [1, 3, 4, 6, 7, 9], [1, 4, 9]));
console.log(testFindDuplicates([0, 3, 4, 5, 9], [1, 3, 4, 6, 7, 9, 10], [3, 4, 9]));
console.log(testFindDuplicates([1, 3, 4, 5, 7, 10, 13], [1, 3, 4, 6, 8, 9, 11, 12, 13], [1, 3, 4, 13]));
