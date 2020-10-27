/* Intermediate Algorithm Scripting: Pig Latin */

/*
Problem: Translate the provided string to Pig Latin.
Input strings are guaranteed to be English words in all lowercase.

Note - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
If a word begins with a vowel, just add "way" at the end.
*/


/* Solution */

// identify consonants until a vowel is hit
// move the consonant(s) to word.length
// add -ay at the end

function translatePigLatin(str) {
  
    var consonantCluster = '';
    var regex = /[aeiou]/i;
    var index = str.search(regex);
    
    // if the word starts with a vowel
    if (index === 0){
      return str.slice(index) + 'way';
    }
  
    // if the word doesn't have a vowel
    else if (index === -1) {
      return str + 'ay';
    }
  
    // if the word starts with consonant(s)
    else {
      consonantCluster = str.slice(0, index);
      return str.slice(index) + consonantCluster + 'ay';
    }
  }
  
  console.log(translatePigLatin("eight"));