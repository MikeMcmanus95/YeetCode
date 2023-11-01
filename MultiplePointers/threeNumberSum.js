/* Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. */

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
      let resultsArr = [];
      for (let i = 0; i < array.length; i++) {
          let left = i + 1;
          let right = array.length - 1;
          while (left < right) {
              let sum = array[i] + array[left] + array[right];
              if (sum > targetSum) right--;
              else if (sum < targetSum) left++;
              else {
                  resultsArr.push([array[i], array[left], array[right]]);
                  left++;
                  right--;
              }
          }
      }
      return resultsArr;
  }