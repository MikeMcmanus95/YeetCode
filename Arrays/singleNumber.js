// O(n) time | O(1) space
/*
Recall the following two properties of XOR:

It returns zero if we take XOR of two same numbers.
It returns the same number if we XOR with zero.
So we can XOR all the numbers in the input; duplicate numbers will zero out each other and we will be left with the single number.
*/
function find_single_number(arr) {
  let num = 0;
  for (i = 0; i < arr.length; i++) {
    num ^= arr[i];
  }
  return num;
}

console.log(find_single_number([1, 4, 2, 1, 3, 2, 3]));
