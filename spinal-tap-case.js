/* Intermediate Algorithm Scripting: Spinal Tap Case */

/*
Problem: Convert the given string to a lowercase sentence with words joined by dashes.
*/


/* Solution */

function spinalCase(str) {

    // Add a space before each uppercase letter to be replaced later by a dash
    // ([a-z]) is capture group 1 and ([A-z]) is capture group 2
    // All lowercase letters next to uppercase letters will have a space in between them to later be replaced
    // str = str because replace does not modify the original string
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    
    // Replace spaces and underscores
    // One or more occurrences of white spaces or underscores are replaced by a '-'
    var regex = /\s+|_+/g;
    str = str.replace(regex, '-');
  
    // Make all letters lowercase 
    return str.toLowerCase();
  }