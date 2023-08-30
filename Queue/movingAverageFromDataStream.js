/*
Leetcode 346
https://leetcode.com/explore/interview/card/bloomberg/74/design/423/

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Implement the MovingAverage class:

MovingAverage(int size) Initializes the object with the size of the window size.
double next(int val) Returns the moving average of the last size values of the stream.
 

Example 1:
Input
["MovingAverage", "next", "next", "next", "next"]
[[3], [1], [10], [3], [5]]
Output
[null, 1.0, 5.5, 4.66667, 6.0]

Explanation
MovingAverage movingAverage = new MovingAverage(3);
movingAverage.next(1); // return 1.0 = 1 / 1
movingAverage.next(10); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3
*/

//For small input size and size capacity
class MovingAverage {
    constructor(size) {
        this.size = size;
        this.queue = [];
    }
    
    next(val) {
        this.queue.push(val);
        
        if (this.queue.length > this.size) {
            this.queue.shift();
        }
        
        let average = this.queue.reduce((a, b) => a + b, 0) / this.queue.length;
        
        return average;
    }
}

//For large input size and/or large capacity
class MovingAverage {
    constructor(size) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
    }
    
    next(val) {
        if (this.queue.length === this.size) {
            this.sum -= this.queue.shift();
        }

        this.queue.push(val);
        this.sum += val;

        return this.sum / this.queue.length;
    }
}