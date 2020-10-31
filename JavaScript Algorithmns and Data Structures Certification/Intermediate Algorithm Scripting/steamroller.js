/* Intermediate Algorithm Scripting: Steamroller */

/*
Problem: Flatten a nested array accounting for the varying levels of nesting.

Note:
For ES2019 compatible browsers, you can use Array.flat() or Array.flatmap()
However, you cannot use flat() or flatmap() for this exercise.
*/


/* Solution */

function steamrollArray(arr) { 
    // flattenedArray keeps flattened arrays 
    var flattenedArray = [];
  
    var flatten = function(arg) {
      // if element is not an array, push to flattenedArray 
      if (!Array.isArray(arg)) {
        flattenedArray.push(arg);
      }
      // if an element is an array, call the function within a layer of array deeper to check if the element is an array or not
      // keep going deeper until element is not an array
      else {
        for (var a in arg) {
          flatten(arg[a]);
        }
      }
    };
  
    // call the function for each element in the array
    arr.forEach(flatten);
    return flattenedArray;
  }