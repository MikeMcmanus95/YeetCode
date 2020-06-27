/*
You are given a stack and pushing numbers from 0 to N in sequence into this stack. At any time there may be any numbers popped from the stack and printed to screen.

Please validate that if a sequence of numbers could be the result of the above procedure.

Sample 1 input:
0 1 2 3
Sample 1 output:
True

*/

// SOLUTION 1: (Simulation)

function validateStackSequence(outputSequence) {
  const inputSequence = Array.fill(outputSequence.length).map((ele, idx) => ele = idx);

  const stack = [inputSequence[0]];
  let outputPointer = 0,
    inputPointer = 1;

  while (inputPointer < inputSequence.length || outputPointer < outputSequence.length) {
    let top = stack[stack.length - 1];
    let desiredOutput = outputSequence[outputPointer];
    if (top === desiredOutput) {
      stack.pop();
      outputPointer++;
    } else if (top !== desiredOutput) {
      if (inputPointer < inputSequence.length) {
        stack.push(inputSequence[inputPointer]);
        inputPointer++;
      }
      else break;
    }
  }

  return stack.length === 0;
}



// SOLUTION 2: (Leetcode)
function validateStackSequences(pushed, popped) {
  debugger;
  let i = 0, j = 0, k = 0, n = pushed.length;
  while (i < n) {
    pushed[k] = pushed[i];
    k++;
    while (j < n && k > 0 && pushed[k - 1] === popped[j]) {
      j++;
      k--;
    }
    i++;
  }
  return j == n;
}

let pushed = [1, 2, 3, 4, 5]
let popped = [4, 5, 3, 2, 1]

validateStackSequences(pushed, popped)
