/*
Leetcode 224 - Basic Calculator
https://leetcode.com/problems/basic-calculator/

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().


Example 1:
Input: s = "1 + 1"
Output: 2

Example 2:
Input: s = " 2-1 + 2 "
Output: 3

Example 3:
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
*/
var calculate = function(s) {
    let stack = [];
    let op = 1;
    let sum = 0
    
    for(let curr=0; curr<s.length; curr++){
        if(s[curr] === ' ')continue;
        
        
        if( !isNaN( parseInt( s[curr] )) ){
            let num = '';
            while(curr<s.length && !isNaN( parseInt( s[curr] )) ){
                num += s[curr];
                curr++;
            }
            curr--;
            sum += parseInt(num)*op
            op = 1;
            
        }else if(s[curr] === '('){
            stack.push(sum);
            stack.push(op);
            sum = 0;
            op = 1
            
        }else if(s[curr] === ')'){
            sum *= stack.pop();
            sum += stack.pop();
            
        }else if(s[curr] === '-'){
            op = -1
        }
    }
    return sum
};
