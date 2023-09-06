/*
Follow Up to Leetcode 56
How do you add intervals and merge them for a large stream of intervals?

Original Question Below:
https://leetcode.com/problems/merge-intervals/

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/

//BST
//Time: O(n log n) | Space: O(1) to O(n)
var Node = function (i) {
    this.start = i[0];
    this.end = i[1];
    this.centre = ( i[0] + i[1] )/2;
    this.left = null;
    this.right = null;
    
    this.merge = function(i) {

        // maybe overlap
        if (this.centre > i[1]) {
            if (this.left) this.left.merge(i);
            else this.left = new Node(i);
            return;
        }

        // maybe overlap
        if (this.centre < i[0]) {
            if (this.right) this.right.merge(i);
            else this.right = new Node(i);
            return;
        }
        
        // For sure there is an overlap
        this.start = Math.min(this.start, i[0]);
        this.end = Math.max(this.end, i[1]);
        this.centre = (this.start + this.end)/2;
    }
    
    this.getTree = function() {
        var leftTree = this.left ? this.left.getTree() : [];
        var rightTree = this.right ? this.right.getTree() : [];
        var result = [];
        leftTree.forEach((x) => {
            
            // if interval full to left of start, push in result
            if (x[0] < this.start && x[1] < this.start) {
                result.push(x);
                return;
            }

            
            // otherwise merge
            this.start = Math.min(this.start, x[0]);
            this.end = Math.max(this.end, x[1]);
        });
        
        result.push([this.start, this.end]);
        
        // store currentIndex to edit later for intervals that wil;l be merged in right tree
        var currentIndex = result.length - 1;

        rightTree.forEach((x) => {
            // if interval full to right of end, push in result
            if (x[0] > this.end && x[1] > this.end) {
                result.push(x);
                return;
            }

            // otherwise merge
            this.start = Math.min(this.start, x[0]);
            this.end = Math.max(this.end, x[1]);
        });            
        
        result[currentIndex][0] = this.start;
        result[currentIndex][1] = this.end;
        return result;
    }

    
}
var merge = function(intervals) {
    var root = null;
    intervals.forEach((x) => {
        if(!root) {
            root = new Node(x);
            return;
        }
        root.merge(x);
    });
        
    return root ? root.getTree() : [];
};

//Time: O(n log n) | Space: O(log N)
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let prev = [null, -1];

    const result = [];

    for (const [currStart, currEnd] of intervals) {
        if (currStart > prev[1]) {
            prev = [currStart, currEnd];
            result.push(prev);
        } else {
            prev[1] = Math.max(prev[1], currEnd);
        }
    }

    return result;
};
