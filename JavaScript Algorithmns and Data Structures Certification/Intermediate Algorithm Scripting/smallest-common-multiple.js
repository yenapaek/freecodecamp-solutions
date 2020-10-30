/* Intermediate Algorithm Scripting: Smallest Common Multiple */

/*
Problem: Find the smallest common multiple of the provided parameters that can be evenly divided by both.
Also, find all sequential numbers in the range between these parameters.

Return: an array with sequential numbers between the smallest common multiple of arguments that can be divided

Note: 
The range will be an array of two numbers that will not necessarily be in numerical order.
*/

/* Solution */
function smallestCommons(arr) {
  var range = [];

  // populate range with sequential numbers
    for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--){
      range.push(i);
    }
 
  // function to find greatest common divisor
  function gcd(a, b) 
  { 
    if (b === 0) { 
        return a;
    }
    return gcd(b, a % b); 
  } 

  var lcm = range[0];

  for (let a = 1; a < range.length; a++) {
    lcm = (lcm * range[a]) / gcd(lcm, range[a]);;
  }
  return lcm;
}