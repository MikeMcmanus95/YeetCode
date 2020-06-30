// Leetcode URL: https://leetcode.com/problems/decode-string

const decodeString = function (s) {
  if (!s) return '';

  const stack = [];

  for (const char of s) {
    if (char === ']') {
      let str = '';

      // Grab all characters before open bracket
      while (stack[stack.length - 1] !== '[') {
        // We do it this way so the string can be in order
        str = stack.pop() + str;
      }

      // Pop off the open bracket
      stack.pop();

      let num = '';
      // While our stack has a length, and the character we're at is a number...
      while (stack.length && !isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }

      // Use the repeat method based on the number we grabbed
      str = str.repeat(Number(num));

      // Push each char of our newly generated string to store it in our stack.
      for (const c of str) {
        stack.push(c);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};
