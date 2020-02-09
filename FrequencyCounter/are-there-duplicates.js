/* Write a function called areThereDuplicates which takes a variable number of
 arguements and checks whether there are duplicates among the arguements passed in.

 areThereDuplicates(1,2,3) // false
 areThereDuplicates(1,2,2) // true
 areThereDuplicates(a,b,c) // false
 areThereDuplicates(a,b,c,a) // true
 areThereDuplicates(a,b,c,d,e,f,b,g,h,i,j,k) // true

 Implementation: Use a frequency counter to check if an arguement occurs more than once.

 Time: O(n) Space: O(n)
 */

function areThereDuplicates() {
  let args = Array.from(arguments);
  let freqCounter = {};

  for (let val of args) {
    freqCounter[val] ? freqCounter[val]++ : (freqCounter[val] = 1);
  }
  for (let key in freqCounter) {
    if (freqCounter[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'));
