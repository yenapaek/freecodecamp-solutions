/* Intermediate Algorithm Scripting: Sorted Union

Problem: 
Write a function that takes two or more arrays and returns the unique
numbers from each array in the order of the first to last array of the argument

Example:

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
expected return: [1, 2, 3, 5, 4, 6, 7, 8]
*/

/* Solution */
function uniteUnique(arr) {
  
    var args = [...arguments];
    var returnedArr = [];
    console.log(args);
  
    // loop through each array argument
    for (let a = 0; a < args.length; a++){
      // loop through each element in each array argument
      for (let b = 0; b < args[a].length; b++){
        // if the returning array doesn't have the element, add it to the
        if (!returnedArr.includes(args[a][b])){
            returnedArr.push(args[a][b]);
        }
      }
    }
    return returnedArr;
  }  