/* Intermediate Algorithm Scripting: Wherefore Art Thou */

/*
Problem: Write an algorithm that will take an array for the first argument
and return an array with all the objects that matches all
the properties and values in the Object passed as second parameter.

*/


/* Solution */

function whatIsInAName(collection, source) {
    // check for a match of source in collection
    // if there is a match, add the entry into the returnArray
  
    // collection is an array of name:value pairs. Go through each index of the array and check if that element has the property:value pairs of source
   
    // the array of all the property names of source
    var srcKeys = Object.keys(source);
  
    // the filtered collection of matches
    return collection.filter(obj => {
      
      // loop through the srcKeys array
      // test each element (obj) of collection to the srcKeys array
      for (var i = 0; i < srcKeys.length; i++) {
        
        // if the element has the same property (name) as an element of srcKey
        // or if the value of the property of collection is the same as the value of the property of source, don't filter in (return false)
        if(!obj.hasOwnProperty(srcKeys[i]) || (obj[srcKeys[i]] !== source[srcKeys[i]])){
          return false;
        }
      }
      return true;
    });
  }