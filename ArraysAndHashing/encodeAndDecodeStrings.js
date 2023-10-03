/*
Leetcode 271 Encode and Decode Strings
https://leetcode.com/problems/encode-and-decode-strings/

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

You are not allowed to solve the problem using any serialize methods (such as eval).

Example 1:
Input: dummy_input = ["Hello","World"]
Output: ["Hello","World"]
Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---> Machine 2

Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);
Example 2:

Input: dummy_input = [""]
Output: [""]
*/

const CHUNK_SIZE = 4;

var encode = function(strs) {
    let encodedString = "";
    
    for (const s of strs) {
        let numString = encodedString.concat(String(s.length).padStart(CHUNK_SIZE, 0));
        encodedString = numString.concat(s);
    }
    
    return encodedString;
};


var decode = function(s) {
    if (s === "") return [""];
    
    const result = [];
    
    let decodedString = "";
    
    let numP = 0;
    let charP = numP + CHUNK_SIZE;
    
    while (numP < s.length) {
        let currWordSize = Number(s.substring(numP, numP + CHUNK_SIZE));
        if (currWordSize > 0) {
            for (let i = charP; i < currWordSize + charP; i++) { //get the word
                decodedString += s[i];
            }
        }
        
        result.push(decodedString); //push the word into result
        
        decodedString = ""; //reset string
        numP = numP + currWordSize + CHUNK_SIZE; //move numP to the next number
        charP = numP + CHUNK_SIZE; //move charP
    }
    
    return result;
};