/*
Leetcode 1570 Dot Product of Two Sparse Vectors
https://leetcode.com/problems/dot-product-of-two-sparse-vectors/

Given two sparse vectors, compute their dot product.

Implement class SparseVector:
SparseVector(nums) Initializes the object with the vector nums
dotProduct(vec) Compute the dot product between the instance of SparseVector and vec
A sparse vector is a vector that has mostly zero values, you should store the sparse vector efficiently and compute the dot product between two SparseVector.

Follow up: What if only one of the vectors is sparse?


Example 1:
Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
Output: 8
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8

Example 2:
Input: nums1 = [0,1,0,0,0], nums2 = [0,0,0,0,2]
Output: 0
Explanation: v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0

Example 3:
Input: nums1 = [0,1,0,0,2,0,0], nums2 = [1,0,0,0,3,0,4]
Output: 6
*/

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);


// Create tuples and use two pointers
// Constructor Time: O(n) | Space: O(n)
// DotProduct Time: O(n + m) Space: O(n + m)? | Space looks like O(1)
class SparseVector {
    constructor(nums) {
        this.array = [];
        nums.forEach((num, i) => {
            if (num !== 0) {
                this.array.push([i, num]);
            }
        })
    }
    
    
    dotProduct(vec) {
        let result = 0;
        
        let p1 = 0;
        let p2 = 0;
        
        while (p1 < this.array.length && p2 < vec.array.length) {
            let [indexI, numI] = this.array[p1];
            let [indexJ, numJ] = vec.array[p2];
            
            if (indexI === indexJ) {
                result += numI *numJ;
                p1++;
                p2++;
            } else if (indexI < indexJ) {
                p1++;
            } else {
                p2++;
            }
        }
        
        return result;
    }
}

//Case: What if only one of the vectors is sparse?
//Approach: Use Binary Search
//Constructor Time: O(n) | Space: O(n)
//DotProduct Time: O(klogn) | Space: O(1)
class SparseVector {
    constructor(nums) {
        this.array = [];
        nums.forEach((num, i) => {
            if (num !== 0) {
                this.array.push([i, num]);
            }
        })
    }
    
    
    dotProduct(vec) {
        let result = 0;
        
        for (const [index, num] of vec.array) {
            let val = this.binarySearch(index, this.array);
            result += (num * val);
        }
        return result;
    }
    
    binarySearch(targetIdx, array) {
        let [left,right] = [0, array.length - 1];
        //let left = 0;
        //let right = array.length - 1
        
        while (left <= right) {
            let mid = left + Math.floor((right-left) / 2);
            let [currIdx, currNum] = array[mid];
            
            if (currIdx === targetIdx) {
                return currNum;
            } else if (currIdx < targetIdx) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return 0;
    }
}