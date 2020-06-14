function balancedBrackets(string) {
  let stack = [];
  let openBrackets = '({[';
  let closingBrackets = ']})';
  let matchingBrackets = { ')': '(', ']': '[', '}': '{' };
  for (let i = 0; i < string.length; i++) {
    if (openBrackets.includes(string[i])) {
      stack.push(string[i]);
    } else if (closingBrackets.includes(string[i])) {
      if (stack.length === 0) return false;
      if (matchingBrackets[string[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(string[i]);
      }
    }
  }
  return stack.length === 0;
}
