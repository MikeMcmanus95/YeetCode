/*
Input:
Sorted array containing negative and positive integers
[-2, -1, 0, 2, 3]

Output:
A new sorted array containing the squares of all input array numbers
[0, 1, 4, 4, 9]

Approach:
-Use multiple pointers on either side of the array
  - whichever gives us the bigger square arr[p1] arr[p2] add to output arr
    - move pointers accordingly

*/

function makeSquares(arr) {
  const squares = Array(arr.length).fill(0);
  let left = 0, right = arr.length - 1, squarePointer = squares.length - 1;

  while (left < right) {
    let leftSq = Math.pow(arr[left], 2), rightSq = Math.pow(arr[right], 2);
    if (leftSq > rightSq) {
      squares[squarePointer] = leftSq;
      left++;
    } else {
      squares[squarePointer] = rightSq;
      right--;
    }
    squarePointer--;
  }
  return squares;
}
