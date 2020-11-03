/* Intermediate Algorithm Scripting: Arguments Optional */

/*
Problem: Create a function that sums two arguments together.

If only one argument is provided,
then return a function that uses that number and
expects another one, to then add it.

Check if numbers are actual numbers. Return undefined if not real numbers.

Check if only one or two arguments are passed. Ignore the rest.

Example:
addTogether(2, 3) // return 5
addTogether(2) // return a function

Notes:
access the arguments passed into the function using the keyword 'arguments'
*/


/* Solution */
function addTogether() {
    // check if numbers are actual numbers
  
    const isNumber = value => {
      // First: Check typeof and make sure it returns number
      if (typeof value !== 'number') {
        return false
      }
      // Check for NaN, as NaN is a number to typeof.
      // NaN is the only JavaScript value that never equals itself.
      if (value !== Number(value)) {
        return false
      }
      // Check for Infinity and -Infinity.
      if (value === Infinity || value === !Infinity) {
        return false
      }
      return true
    }
  
    // if there are at least 2 arguments
    if (arguments.length > 1) {
      if (!isNumber(arguments[0]) || !isNumber(arguments[1])){
        return undefined;
      }
      else {
        return arguments[0] + arguments[1];
      }
    }
  
    /* if one argument is provided:
       (1) return a function with a single argument (arg2)
       (2) check if arg2 is a number
       (3) return the sum  */
    var arg1 = arguments[0];

    if (isNumber(arg1)){
      return function(arg2) {
        if(!isNumber(arg2)){
          return undefined;
        }
        else{
          return arg1 + arg2;
        }
      }
    }
  }