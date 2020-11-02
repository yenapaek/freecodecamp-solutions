/* Intermediate Algorithm Scripting: Binary Agents */

/*
Problem: Translate binary numbers into string.
*/


/* Solution */

const binaryAgent = (str) => {
    var binaryNum = str.split(" ");
    var convertedStr = [];

    for (var i in binaryNum) {
        convertedStr.push(String.fromCharCode(parseInt(binaryNum[i], 2)));
    }
    return convertedStr.join("");
}