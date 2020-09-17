// Leetcode URL: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// It is guaranteed that the answer is unique.

const removeDuplicates = function (s, k) {
  let count = 0;
  let currChar = '';
  let nextChar = '';

  for (let i = 0; i < s.length; i++) {
    if (i < 0) i = 0;
    currChar = s[i];
    nextChar = s[i + 1];
    count++;

    if (currChar !== nextChar && count >= k) {
      // slice out the parts of the string we dont want
      //          first half                         second half
      s = s.slice(0, i - count + (count % k) + 1) + s.slice(i + 1);
      // reset i and count to run again
      i -= count + k;
      count = 0;
    } else if (currChar !== nextChar && count < k) {
      count = 0;
    }
  }

  return s;
};


const removeDuplicatesStack = (string, k) => {
  const stack = [];
  let resultStr = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let peek = stack.length - 1;

    if (stack[peek] && stack[peek].character === char) {
      stack[peek].count++
      if(stack[peek].count == k) stack.pop();
    }
    else {
      stack.push({ character: char, count: 1 });
    }
  }

  for (let {character, count} of stack) {
    resultStr += character.repeat(count);
  }
  return resultStr;
}

console.log(removeDuplicatesStack("deeedbbcccbdaa", 3)) // 'aa'
