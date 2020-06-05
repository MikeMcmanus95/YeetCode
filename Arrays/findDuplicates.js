// Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns
// an array of all passport numbers that are both in arr1 and arr2.Note that the output array should be sorted
// in an ascending order.

// Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space
// complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much
// bigger than arr1.

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

function testFindDuplicates(arrayA, arrayB, commonValues) {
  let resultArr = findDuplicates(arrayA, arrayB);
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] !== commonValues[i]) {
      return ('Test failed. Expected ', resultArr[i], ' to equal ',
        commonValues[i]);
    }
  }

  return true;
}

testFindDuplicates([1, 2, 4, 5, 9, 10], [1, 3, 4, 6, 7, 9], [1, 4, 9]);
testFindDuplicates([0, 3, 4, 5, 9], [1, 3, 4, 6, 7, 9, 10], [3, 4, 9]);
testFindDuplicates([1, 3, 4, 5, 7, 10, 13], [1, 3, 4, 6, 8, 9, 11, 12, 13], [1, 3, 4, 13]);
