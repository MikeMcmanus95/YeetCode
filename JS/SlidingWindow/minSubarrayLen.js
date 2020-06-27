// TODO:

/*  Write a function called minSubarrayLen which accepts two parameters, an array of positive
integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater
than or equal to the integer passed to the function. If there isnt one, return 0 instead.

  minSubarrayLen([2,3,1,2,4,3],7) // 2 beacuse [4,3] is the smallest subarray
  minSubarrayLen([2,1,6,5,4],9) // 2 beacuse [5,4] is the smallest subarray

 */

function minSubarrayLen(arr, target) {
  let subarrayLen = 2;
  let start = 0;
  let end = 1;
  let tempSum = arr[start] + arr[end];
  while (start < arr.length) {
    if (tempSum < target) {
      end++;
      tempSum += arr[end];
      subarrayLen++;
    }
    if (tempSum >= target) {
      tempSum -= arr[start];
      start++;
      subarrayLen--;
    }
    console.log(tempSum);
    console.log(subarrayLen);
    console.log(arr[start], arr[end]);
  }
  return subarrayLen;
}

// console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubarrayLen([2, 1, 6, 5, 4], 9));
