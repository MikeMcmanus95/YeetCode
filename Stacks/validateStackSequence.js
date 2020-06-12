// var validateStackSequences = function (pushed, popped) {
//
//   let isContinue = true;
//   let i = 0;
//   while (!!pushed.length && isContinue) {
//     if (pushed[i] === popped[0]) {
//       popped.shift();
//       pushed.splice(i, 1);
//       i--;
//     } else {
//       i++;
//     }

//     if (i > pushed.length) {
//       isContinue = false;
//     }
//   }

//   return !pushed.length;
// };

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
