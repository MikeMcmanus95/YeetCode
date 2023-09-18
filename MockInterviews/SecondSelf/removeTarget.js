/*
Given an array and a value, remove all elements in the array that equal the value. Return the array.

Example -
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: [0,1,3,0,4]

Constraints:
• All elements in the array are integers.
• Value is always an integer.
• Array is not sorted.

Approach 1:
Create a new array. Add all elements from given array that don't equal the value to the new array.

Output: [0,1,3,0,4]
Time: O(N)
Space: O(N)

Approach 2:
Two Pointer strategy with read and write pointers. At the end, replace unecessary values with null.

Output: [0,1,3,0,4,null,null,null]
Time: O(N)
Space: O(1)

Approach 3:
Two Pointer strategy with read and write pointers. At the end, pop all unecessary values at the end of nums array.

Output: [0,1,3,0,4]
Time: O(N)
Space: O(1)

Approach 4:
Recursively implement Approach #3.

Output: [0,1,3,0,4]
Time: O(N)
Space: O(N)

*/

/* ----- Approach 1 ----- */
function removeTarget1(nums, val) {
    const result = [];
    
    for(let i=0; i<nums.length; i++) {
      if (nums[i] !== val) {
        result.push(nums[i]);
      }
    }
    
    return result;
  }
  /*
  Time Complexity: O(N)
  Space Complexity: O(N)
  */
  let nums1 = [0,1,2,2,3,0,4,2]; //[0,1,3,0,4]
  let val1 = 2;
  console.log(removeTarget1(nums1, val1));
  
  /* ----- Approach 2 ----- */
  function removeTarget2(nums, val) {
    let read = 0;
    let write = 0;
    
    while (read < nums.length) {
      if (nums[read] !== val) { 
        nums[write] = nums[read];
        write++;
      }
      read++;
    }
    
    for (let i = nums.length; i > write; i--) {
      nums[i] = null;
    }
    
    return nums;
  }
  /*
  Time Complexity: O(N)
  Space Complexity: O(1)
  */
  let nums2 = [0,1,2,2,3,0,4,2]; //[0,1,3,0,4]
  let val2 = 2;
  console.log(removeTarget2(nums2, val2));
  
  /* ----- Approach 3 ----- */
  function removeTarget3(nums, val) {
    let read = 0;
    let write = 0;
    
    while (read < nums.length) {
      if (nums[read] !== val) { 
        nums[write] = nums[read];
        write++;
      }
      read++;
    }
    
    for (let i = nums.length; i > write; i--) {
      nums.pop();
    }
    
    return nums;
  }
  /*
  Time Complexity: O(N)
  Space Complexity: O(1)
  */
  let nums3 = [0,1,2,2,3,0,4,2]; //[0,1,3,0,4]
  let val3 = 2;
  console.log(removeTarget3(nums3, val3));
  
  /* ----- Approach 4 ----- */
  function removeTarget4(nums,val) {
    let write = 0;
    
    function traverse(read) {
      if(read === nums.length) {
        return;
      }
      
      if (nums[read] !== val) {
        nums[write] = nums[read];
        write++;
      }
      
      traverse(read + 1);
      
      if(read >= write) {
        nums.pop();
      }
      
      return nums;
    } 
    
    return traverse(0);
  }
  /*
  Time Complexity: O(N)
  Space Complexity: O(N)
  */
  let nums4 = [0,1,2,2,3,0,4,2]; //[0,1,3,0,4]
  let val4 = 2;
  console.log(removeTarget4(nums4, val4));