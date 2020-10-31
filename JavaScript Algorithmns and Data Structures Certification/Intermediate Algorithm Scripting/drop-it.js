/* Intermediate Algorithm Scripting: Convert HTML Entities */

/*
Problem: Iterate through given arr. Remove arr[0] until
an element passes the function's condition and returns true.

Return: the rest of arr when the condition is satisfied
*/


/* Solution */
function dropElements(arr, func){
    // check for array not to be empty
    // while loopp continues until arr[0] satisfies func condition
    while (arr.length > 0 && !func(arr[0])){
        
        arr.shift(); // remove the current arr[0]
    }
    return arr;
}