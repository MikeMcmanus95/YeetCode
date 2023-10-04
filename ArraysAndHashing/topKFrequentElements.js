/** 
Leetcode 347
Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Solution 1: Create a hashMap where the number/value is on the left and the frequency is on the right.
Convert the hashset to an array called bucket where the index is the frequency and the container holds an array of the numbers.
Look at the bucket starting from the end and put in into a result array while the length is not greater than k

Time: O(n) || Space: O(n)
 */
function topKFrequent(nums, k) {
    const freqMap = new Map();
  
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
  
    const bucket = new Array(nums.length).fill(0);
  
    for (const [num, freq] of freqMap) {
        if (!bucket[freq]) {
            bucket[freq] = [num];
        } else {
            bucket[freq].push(num);
        }
    }
  
    let i = bucket.length - 1;
    let result = [];
  
    while (i > 0 && result.length < k) {
        if (bucket[i]) {
            result.push(...bucket[i]);
        }
        i--;
    }
  
    return result;
  };
  