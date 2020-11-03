/* Intermediate Algorithm Scripting: Make a Person
 *
 * Problem: Fill in the object constructor with the following methods:
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 * 
 */

 /* Solution */

 var Person = function(firstAndLast) {

    // creating a key instead of a regular function by using keyword 'this.'
  
    var fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
    
    this.setFirstName = function(first) {
      fullName = first + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(last) {
      fullName = fullName.split(" ")[0] + " " + last;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };