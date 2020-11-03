/* Intermediate Algorithm Scripting: Everything Be True */

/*
Problem: Check if 2nd argument is truthy on all elements of a collection.
*/


/* Solution */

function truthCheck(collection, pre) {

    // check if all elements in collection has pre as a property
    // and that each element is a truthy
    return collection.every(function(element) {
  
      // check if the element has the property
      // check if the element is a truthy
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
  
  }