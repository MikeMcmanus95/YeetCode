/*
/*
Given a string, return true if the string is full of characters that are numbers.

Example:
s = '123213123' --> true

s = '1232321A' --> false

Note: This works because the characters following ASCII codes so you can check 
if the string number is within the bounds of the string of ASCII for '0' to '9'
*/

function isNumber(s) {
    for (const char of s) {
        if (char < '0' || char > '9') {
            return false;
        }
    }

    return true;
}
