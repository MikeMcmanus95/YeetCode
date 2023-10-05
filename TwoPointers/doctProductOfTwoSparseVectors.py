"""
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

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)

"""

# Solution: Create a list of tuples and use two pointers to compare
# Time: O(n + m) | Space: O(n)
class SparseVector:
    def __init__(self, nums: List[int]):
        # self.sparse = [(i, v) for i, v in enumerate(nums) if v]
        self.sparse = []
        for i, num in enumerate(nums):
            if num != 0:
                self.sparse.append((i, num))
                
    def dotProduct(self, vec: 'SparseVector') -> int:
        product = 0
        
        p1 = 0
        p2 = 0
        
        while p1 < len(vec.sparse) and p2 < len(self.sparse):
            if vec.sparse[p1][0] < self.sparse[p2][0]:
                p1 += 1
            elif vec.sparse[p1][0] > self.sparse[p2][0]:
                p2 += 1
            else:
                product += vec.sparse[p1][1] * self.sparse[p2][1]
                p1 += 1
                p2 += 1
        return product

# Follow up: what if only one of the vectors is sparse?
class SparseVector:
    def __init__(self, nums: List[int]):
        self.pairs = []
        for i, num in enumerate(nums):
            if num != 0:
                self.pairs.append((i, num))

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        min_pairs = self.pairs
        max_pairs = vec.pairs
        
        if len(self.pairs) > len(vec.pairs):
            min_pairs = vec.pairs
            max_pairs = self.pairs
        
        result = 0
        
        for i, pair in enumerate(min_pairs):
            idx = self.binary_search(pair[0], max_pairs)
            if idx != -1:
                result += min_pairs[i][1] * max_pairs[idx][1]
                
        return result
    
    def binary_search(self, idx, pairs):
        left = 0
        right = len(pairs) - 1
        
        while left + 1 < right:
            mid = left + (right - left) // 2
            if pairs[mid][0] == idx:
                return mid
            elif pairs[mid][0] < idx:
                left = mid
            else:
                right = mid
        if pairs[left][0] == idx:
            return left
        if pairs[right][0] == idx:
            return right
        return -1