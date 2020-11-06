/* JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
 * 
 * Problem: Convert a given number into a roman numeral
 * 
 * Note: Roman Numerals should be upper-case
 * /

/* Solution */

function convertToRoman(num) {

    var symbol = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    var value = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    var romanized = "";

    for (let i = 0; i < value.length; i++){
        while (num >= value[i]){ //
            romanized += symbol[i]; // add Roman Numeral
            num -= value[i]; // Subtract the value from total number
        }  
    }
    return romanized;
}
