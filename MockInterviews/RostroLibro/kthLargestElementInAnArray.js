/*
Leetcode 215
https://leetcode.com/problems/kth-largest-element-in-an-array/description/

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/

//Time: O(N * logk) where k is what you're looking for so this is a smaller heap to manage
//Space: O(k)
class MinHeap {
    constructor(capacity) {
        this.capacity = capacity;
        this.heap = [];
    }
    
    add(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
        if(this.heap.length > this.capacity) this.remove();
    }
    
    remove() {
        this.swap(0, this.heap.length-1);
        const min = this.heap.pop();
        this.trickleDown(0);
        return min;
    }
    
    bubbleUp(idx) {
        const parent = Math.floor((idx-1)/2);
        let max = idx;
        
        if(parent >= 0 && this.heap[parent] > this.heap[max]) max = parent;
        
        if(max !== idx) {
            this.swap(max, idx);
            this.bubbleUp(max);
        }
    }
    
    trickleDown(idx) {
        const leftChild = 2 * idx + 1;
        const rightChild = 2 * idx + 2;
        let min = idx;
        
        if(leftChild < this.heap.length && this.heap[leftChild] < this.heap[min]) min = leftChild;
        if(rightChild < this.heap.length && this.heap[rightChild] < this.heap[min]) min = rightChild;
        
        if(min !== idx) {
            this.swap(min, idx);
            this.trickleDown(min);
        }
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

var findKthLargest = function(nums, k) {
const minHeap = new MinHeap(k);

for(const n of nums) minHeap.add(n);

return minHeap.remove();
};

//O(N log(n)) || Space: O(log n) in Java/C++ or O(n) in Python because it uses Timsort
function findKthLargest(values, k) {
    values.sort((a, b) => a - b);

    return values[values.length - k];
}