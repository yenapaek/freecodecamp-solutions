/* Intermediate Algorithm Scripting: Seek and Destroy */

/*
Problem: Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

Note -
*/


/* Solution A */

/*
function fearNotLetter(str){

    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    var a = alphabet.indexOf(str[0]);

    for (let i = 0; i < str.length; i++){
       if (str.charAt(i) !== alphabet[a]){
            return alphabet[a];
       }
       a++;
    }
    return undefined;
}
*/

/* Solution B */

   function fearNotLetter(str){

    // ASCII number of first letter of str
    var a = str.charCodeAt(0);

    for (let i = 0; i < str.length; i++){
        // if ASCII number of str loop doesn't
        // = ASCII number of alphabet loop
        if (str.charCodeAt(i) !== a+i){
            return String.fromCharCode(a+i); // return that letter
        }
    }
    return undefined;
}