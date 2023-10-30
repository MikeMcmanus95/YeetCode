/*
Given an unsorted array, perform selection sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

Time <= 3 min
*/

// Time O(n^2)
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let min = i;
      
      for (let j = i + 1; j < array.length; j++) {
        if (array[min] > array[j]) {
          min = j;
        }
  
        if (min !== i) {
          [array[i], array[min]] = [array[min], array[i]]
        }
      }
    }
  
    return array;
  }
