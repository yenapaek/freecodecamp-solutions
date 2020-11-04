/* JavaScript Algorithms and Data Structures Project: Palindrome Checker
 *
 * Problem: Return true if the given string is a palindrome.
 * Otherwise, return false.
 * 
 * Notes: A palidrome is a word or sentence spelled the same way forward and backward.
 * Ignore punctuation, case, and spacing.
 * (1) Remove all non-alphanumeric characters
 * (2) Turn everything to the same case
 * (3) Check for the characters in the front and back of the string.
 *  If the character is the same up to the middle of the string, return true
 * 
 * /
 
/* Solution */
function palindrome(str) {
    var regex = /[A-Za-z0-9]/gi;
    var testStr = (str.toLowerCase()).match(regex);  
    var end = testStr.length -1;
  
    for (var i in testStr){
      if(i === (Math.round((testStr.length-1)/2))){
        break;
      }
      else if (testStr[i] !== testStr[end]){
        return false;
      }
      end--;
    }
    return true;
  }