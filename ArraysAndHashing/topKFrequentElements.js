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
 */

/*
Notes:
https://lemire.me/blog/2017/06/14/quickselect-versus-binary-heap-for-top-k-queries/
If you only seek the top 5 elements out of an array, then the binary heap is likely to beat QuickSelect, irrespective of how many elements I have. The binary heap will fit in one or two cache lines, and the log k factor will be small.
If I keep k at a sizeable 128, but I increase substantially the size of the array, then QuickSelect will start to win big.
However, if I keep increasing the array size, the benefits of QuickSelect might start to fade. Indeed, QuickSelect will start to operate in RAM whereas the binary heap will remain in CPU cache. QuickSelect will become increasingly limited by potentially expensive cache misses.
QuickSelect still has the worst case quadratic-time scenario that could be triggered by really bad input data. The binary heap is more likely to provide consistent speed.
What else could we do?

-suggested a simple insertion sort on the basis that, for large streams, you are unlikely to encounter many candidates for the top-k position. This would probably work well for very long streams, but it could degenerate badly in some cases.
- refered to a fancier approach used by Google Guava: maintain a buffer of 2k elements initially empty. Fill it up. Once it is full, use QuickSelect on it and discard half of it. Rinse and repeat. This seems like an appealing idea and Michel testifies that it provides very good practical performance.
*/


// Total time : O(n + mlog(k) + k) | Space : O(m)
// this is better than O(mlog(m)) because we dequeue whenever the size of heap is greater than k

var topKFrequent = function(nums, k) {
    const map = new Map();
    const heap = new MinPriorityQueue();
    
    // hashmap, O(n)
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    // heapify using MaxPriorityQueue, we enqueue key based on count, O(mlog(m)) where m is length of hashmap
    for (const [val, freq] of map) {
        heap.enqueue(val, freq);
        
        while (heap.size() > k) {
            heap.dequeue()
;        }
    }
    
       
    const result = [];

    // dequeue k times from very top O(k)
    for (let i = 0; i < k; i++) {
        result.push(heap.dequeue().element);
    }
    
    return result;
};


// Time: O(n) | Space: O(n)
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
  