/* JavaScript Algorithms and Data Structures Project: Caesar's Cipher
 *
 * Problem: One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
 * Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * 
 * Notes: All letters will be uppercase.
 * Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 * 
 * /
 
/* Solution */
function rot13(str) {
    var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var x;
    var convertedLetter = [];
  
    // read characters of string and check if they are a letter
    for (var i in str) {
      // if character is a letter, shift letter
      if ((str.charAt(i)).match(/[A-Z]/i)) {
        x = alpha.indexOf(str.charAt(i));
        if (x > 12) {
          convertedLetter.push(alpha[x - 13]);
        }
        else if (x <= 12){
          convertedLetter.push(alpha[x + 13]);
        }
      }
  
      // if character is not a letter, push character
      else { convertedLetter.push(str.charAt(i)); }
    }
    
    return convertedLetter.join("");
  }