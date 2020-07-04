/* arr: [3, 1, 2, 4, 5, 6]
US: 4
maxIdx: 1
*/

function pancakeSort(arr) {
  let unsortedLength = arr.length;

  while (unsortedLength) {
    let maxNumIdx = findGreatest(arr, unsortedLength);

    if (maxNumIdx === 0) {
      flip(arr, unsortedLength);
    } else {
      flip(arr, maxNumIdx + 1);
      flip(arr, unsortedLength);
    }
    unsortedLength--;
  }
  return arr;
}

function flip(arr, k) {
  let left = 0, right = k - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}


function findGreatest(arr, unsortedLength) {
  let maxNum = -Infinity;
  let maxNumIdx = 0;
  for (let i = 0; i < unsortedLength; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
      maxNumIdx = i;
    }
  }
  return maxNumIdx;
}


console.log(pancakeSort([1, 5, 4, 3, 2]));
console.log(pancakeSort([6, 4, 2, 1, 3, 5]));
/*

Input:
  unsortedLen = arr.length;
                     4
  arr = [5, 1, 4, 3, 2]
         0
  flip(arr, unsortedLen)
  unsortedLen = 4

  [2, 3, 4, 1, 5]
         2  3
  flip(arr, 3)
  [4, 3, 2, 1, 5]
  flip(arr, 4)
  [1, 2, 3, 4, 5]

Output:
  [1, 2, 3, 4, 5] to clarify, this is pancakeSort's output

Approach:
  Find the greatest numbers position in the array - O(n)

  Use flip to bring it to its correct spot - O(n)
    -If element is NOT at 0:
      - Bring the element to the beginning
        -flip(arr, position + 1)
      - Bring the element to the end of unsortedLen
        -flip(arr, unsortedLen)
    -Else
      - Bring the element to the end of unsortedLen
        -flip(arr, unsortedLen)

Time & Space:
  O(n ^ 2) Time | O(1) Space

*/
