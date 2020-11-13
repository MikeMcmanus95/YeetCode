// AlgoExpert URL: https://www.algoexpert.io/questions/Interweaving%20Strings
// Solution 1: Recursive
// O(nm) time | O(nm) space
function interweavingStrings(one, two, three, p1 = 0, p2 = 0, p3 = 0) {
  let charOne = one[p1],
    charTwo = two[p2],
    charThree = three[p3];
  if (p3 === three.length && p1 === one.length && p2 === two.length)
    return true;
  else if (p3 === three.length) return false;

  if (charOne === charThree && charTwo === charThree) {
    return (
      interweavingStrings(one, two, three, p1 + 1, p2, p3 + 1) ||
      interweavingStrings(one, two, three, p1, p2 + 1, p3 + 1)
    );
  } else if (charOne === charThree) {
    return interweavingStrings(one, two, three, p1 + 1, p2, p3 + 1);
  } else if (charTwo === charThree) {
    return interweavingStrings(one, two, three, p1, p2 + 1, p3 + 1);
  } else {
    return false;
  }
}
