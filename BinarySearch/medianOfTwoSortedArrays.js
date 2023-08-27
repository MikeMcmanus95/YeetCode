/*
Leetcode 4
https://leetcode.com/problems/median-of-two-sorted-arrays/description/

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

function findMedianSortedArrays(nums1, nums2) {
    //make nums1 the smaller length of the two to satisfy the if conditions below
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    //use the length to figure out how to split the arrays
    const totalLength = nums1.length + nums2.length;
    //if it's off, you just return the middle value at the end, if the totalLength is even you'll have to do the average of the two middle numbers
    const isOdd = totalLength % 2;

    let start = 0;
    let end = nums1.length - 1;
    
    while (true) {
        //you're cutting it between l1Index and r1Index, and l2Index and r2Index

        //l1Index is the midpoint for nums1
        const l1Index = Math.floor((start + end) / 2);
        //to get the midpoint for nums2: total/2 - the cut in nums1 - 1 to get the appropriate midpoint
        const l2Index = Math.ceil(totalLength / 2) - (l1Index + 1) - 1;

        const r1Index = l1Index + 1;
        const r2Index = l2Index + 1;
        
        //get the values for the indices and have a default value of a super big number or super small number for edge cases
        const l1Val = l1Index >= 0 ? nums1[l1Index] : Number.MIN_SAFE_INTEGER;
        const l2Val = l2Index >= 0 ? nums2[l2Index] : Number.MIN_SAFE_INTEGER;
        
        const r1Val = r1Index < nums1.length ? nums1[r1Index] : Number.MAX_SAFE_INTEGER;
        const r2Val = r2Index < nums2.length ? nums2[r2Index] : Number.MAX_SAFE_INTEGER;
        
        //figure out if you've made the cuts in the right place
        //if l1Val in the first array is bigger than r2Val in the second array, then you need to make the window smaller by lowering end pointer
        if (l1Val > r2Val) {
            end = l1Index - 1;
        }
        else if (l2Val > r1Val) {
            start = l1Index + 1;
        }
        else {//if the cuts are correct, then return the median
            return isOdd ? Math.max(l1Val, l2Val) : (Math.max(l1Val, l2Val) + Math.min(r1Val, r2Val)) / 2;
        }
    }
}