// Sorted Array Solution. Time: O(n^3) | Space: O(1)
function findArrayQuadruplet(arr, s) {
  arr.sort((a, b) => a - b);

  let startIdxA = 0;
  let startIdxB = startIdxA + 1;
  let left = startIdxB + 1;
  let right = arr.length - 1;

  while (startIdxA < arr.length) {
    while (startIdxB < arr.length) {
      while (left < right) {
        let sum = arr[startIdxA] + arr[startIdxB] + arr[left] + arr[right];
        if (sum === s) return [arr[startIdxA], arr[startIdxB], arr[left], arr[right]];
        else if (sum < s) left++;
        else right--;
      }
      startIdxB++;
      left = startIdxB + 1;
      right = arr.length - 1;
    }
    startIdxA++;
    startIdxB = startIdxA + 1;
    left = startIdxB + 1;
    right = arr.length - 1;
  }
  return [];
}


console.log(findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20));
/*
input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20
  [0, 1, 2, 3, 4, 5, 7, 9]
   SA SB l               r
      0 + 1 + 7 +  9 = 17     s = 20
   s = 20

// {value : true}
// a  + b + c = 15
// hashTable[5] ? d = 5

output: [0, 4, 7, 9]

*/
