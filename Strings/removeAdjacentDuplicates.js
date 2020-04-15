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
