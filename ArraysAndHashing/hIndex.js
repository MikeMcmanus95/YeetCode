/**
 * @param {number[]} citations
 * @return {number}
 */
// SOLUTION 1: Sorting
// Time: O(n log(n)) | Space: O(1)
const hIndex = function(citations) {
  citations.sort((a, b) => b - a);
  let hIdx = 0;

  for (let i = 0; i < citations.length; i++) {
      if (citations[i] > i) {
          hIdx = i + 1;
      }
  }
  return hIdx;
};
