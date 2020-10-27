/* Intermediate Algorithm Scripting: Seek and Replace */

/*
Problem: You will create a program that takes a sentence,
then search for a word in it and replaces it for a new one
while preserving the uppercase if there is one.
*/


/* Solution */
function myReplace(str, before, after) {
  
    // check if before word is uppercase and match case of after
  if (before[0] === before[0].toUpperCase()){
    var capitalizedAfter = after.replace(after[0], after[0].toUpperCase());
    return str.replace(before, capitalizedAfter);
  }

  // check if before word is lowercase and match case of after
  else if (before[0] === before[0].toLowerCase()){
    var lowercaseAfter = after.replace(after[0], after[0].toLowerCase());
    return str.replace(before, lowercaseAfter);
  }
}