/* Write a function called averagePair. Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target average
There may be more than one pair that matches the average target.

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19], 8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([], 4) // false

Use pointers at the beginning and end to take advantage of the fact that the array is sorted. Similar
to binary search, only without the mid point variable.

Time: O(n) Space: O(1)
*/

function averagePair(arr, targetAvg) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let currentAvg = (arr[start] + arr[end]) / 2;
    if (currentAvg > targetAvg) {
      end--;
    } else if (currentAvg < targetAvg) {
      start++;
    } else {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
