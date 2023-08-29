/*
Leetcode 692
https://leetcode.com/problems/top-k-frequent-words/description/

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.


Example 1:
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:
Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
*/

var topKFrequent = function(words, k) {
    const map = new Map();
    const bucket = new Array(words.length);
    const result = [];

    for (const word of words) {
        if (!map.has(word)) map.set(word, 0);
        map.set(word, map.get(word) + 1);
    }

    for (const [word, freq] of map) {
        if (bucket[freq] === undefined) bucket[freq] = [word];
        else bucket[freq].push(word);
    }

    console.log(bucket)

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i] === undefined) continue;
        
        result.push(...bucket[i].sort());

        if(result.length >= k) return result.slice(0, k);
    }
};