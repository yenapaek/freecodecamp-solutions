/* Intermediate Algorithm Scripting: DNA Pairing */

/*
Problem: The DNA strand is missing the pairing element.
Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG.
Match the missing element to the provided character.

The character and its pair are paired up in an array.
All the arrays are grouped into one encapsulating array.
*/


/* Solution */

function pairElement(str) {
    var pairArr = [];

    for (let i = 0; i<str.length; i++) {

        switch(str[i]) {
            case "A":
                pairArr.push(["A", "T"]);
                break;

            case "T":
                pairArr.push(["T", "A"]);
                break;

            case "C":
                pairArr.push(["C", "G"]);
                break;

            case "G":
                pairArr.push(["G", "C"]);
                break;
        }
    }
    return pairArr;
  }
  