/*
https://leetcode.com/discuss/interview-question/380650/Bloomberg-or-Phone-or-Candy-Crush-1D
It was a 45 min interview. First he started with my introduction and some prior experience of work for about 10 minutes and asked me why i wanted to join bloomberg. Then told me to open the hackerrank link where he gave me this question:

Write a function to crush candy in one dimensional board. In candy crushing games, groups of like items are removed from the board. In this problem, any sequence of 3 or more like items should be removed and any items adjacent to that sequence should now be considered adjacent to each other. This process should be repeated as many time as possible. You should greedily remove characters from left to right.

Example 1:

Input: "aaabbbc"
Output: "c"
Explanation:
1. Remove 3 'a': "aaabbbbc" => "bbbbc"
2. Remove 4 'b': "bbbbc" => "c"
Example 2:

Input: "aabbbacd"
Output: "cd"
Explanation:
1. Remove 3 'b': "aabbbacd" => "aaacd"
2. Remove 3 'a': "aaacd" => "cd"
Example 3:

Input: "aabbccddeeedcba"
Output: ""
Explanation:
1. Remove 3 'e': "aabbccddeeedcba" => "aabbccdddcba"
2. Remove 3 'd': "aabbccdddcba" => "aabbcccba"
3. Remove 3 'c': "aabbcccba" => "aabbba"
4. Remove 3 'b': "aabbba" => "aaa"
5. Remove 3 'a': "aaa" => ""
Example 4:

Input: "aaabbbacd"
Output: "acd"
Explanation:
1. Remove 3 'a': "aaabbbacd" => "bbbacd"
2. Remove 3 'b': "bbbacd" => "acd"

Follow-up:
What if you need to find the shortest string after removal?

Example:

Input: "aaabbbacd"
Output: "cd"
Explanation:
1. Remove 3 'b': "aaabbbacd" => "aaaacd"
2. Remove 4 'a': "aaaacd" => "cd"
*/

function candyCrush(s, i = 0) {
    for (i; i < s.length - 2; i++) {
      let candy1 = s[i];
      let candy2 = s[i + 1];
      let candy3 = s[i + 2];
      
      if (candy1 === candy2 && candy2 === candy3) {
        let j = i; //keep track of your left side
        i += 2; //remove the minimum amount of contiguous candies which is size 3
        
        let currCandy = s[i]; //store the currentCandy you're looking at
  
        //look for more candy because it's >= 3 of the same type
        while (i < s.length && s[i] === currCandy) {
          i++;
        }
              
        let left = s.slice(0, j);
        let right = s.slice(i);
        
        let newS = left + right; //new s after removing contiguous candy
        
        let uncrushed = candyCrush(s, i);
        let crushed = candyCrush(newS, 0);
        
        return (uncrushed.length < crushed.length) ? uncrushed : crushed;
        }
    }
    
    return s;
}