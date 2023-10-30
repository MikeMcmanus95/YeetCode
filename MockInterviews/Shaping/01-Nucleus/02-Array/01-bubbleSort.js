/*
Given an unsorted array, perform bubble sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

Time <= 3 min
*/

//Time O(n^2)
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        const [curr, next] = [array[j], array[j + 1]];
  
        if (curr > next) {
          array[j] = next;
          array[j + 1] = curr;
        }
      }
    }
    return array;
  }