/*
There are three types of edits that can be performed on strings:
-insert a character
-remove a character
-replace a character

Given two strings, write a function to check if they are one edit (or zero edits) away.

Example:
pale, ple --> true
pales, pale --> true
pale, bale --> true
pale, bake --> false
*/

function oneEditAway(first, second) {
    const firstLength = first.length;
    const secondLength = second.length;
  
    if (Math.abs(firstLength - secondLength) > 1) {
      return false;
    }
  
    let isEdited = false;
  
    for (let i = 0, j = 0; i < firstLength && j < secondLength; i++, j++) {
      if (first[i] !== second[i]) {
        if (isEdited) {
          return false;
        }
  
        if (firstLength < secondLength) {
            j--; //decrease j, we are deleting char from second string
        } else if (firstLength > secondLength) {
            i--; //decrease i, we are deleting char from first string
        }
      }
  
      isEdited = true;
    }
  
    return true;
  }
  
  let first = 'pale';
  let second = 'babe';
  
  
  console.log(oneEditAway(first, second));