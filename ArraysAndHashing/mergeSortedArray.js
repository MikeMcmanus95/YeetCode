/*
Leetcode 88
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Time: O(n) | Space: O(1)
*/

var merge = function(nums1, m, nums2, n) {
    //pointers needs to start at last non zero number
    let p1 = m - 1; 
    let p2 = n - 1;
 
    for (let i = nums1.length - 1; i >= 0; i--) {
        let val1 = nums1[p1];
        let val2 = nums2[p2];
        
        if (p1 >= 0 && val1 >= val2) { //check if p1 is still within bounds and if the value of 1 >= value of 2
            nums1[i] = val1;
            p1--;
        } else if (p2 >= 0) { //check if p2 is still within bounds
            nums1[i] = val2;
            p2--;
        }
    }
 };
 