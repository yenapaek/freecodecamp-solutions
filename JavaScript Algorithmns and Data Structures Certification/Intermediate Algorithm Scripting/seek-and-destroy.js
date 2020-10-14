/* Intermediate Algorithm Scripting: Seek and Destroy */

/*
Problem: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

Note - You have to use the arguments object.
*/


/* Solution */

function destroyer(arr, ...args) {

    return arr.filter(function(el) {
      return !args.includes(el);
    });
  
}
