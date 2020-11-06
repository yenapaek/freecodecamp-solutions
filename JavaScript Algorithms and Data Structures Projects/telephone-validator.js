/* JavaScript Algorithms and Data Structures Project: Telephone Validator
 *
 * Problem: Return true if the passed string looks like a valid US phone number.
 * 
 * Notes: The area code is required. If the country code is provided, you must confirm that the country code is 1. 
 * Examples of valid phone numbers -
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 * 
 * /
 
/* Solution */
function telephoneCheck(str) {
  
    // 555-555-5555 || 1 555-555-5555
    var regex1 = /^1?\s?\d{3}\-\d{3}\-\d{4}/;
    
    // (555)555-5555 || (555) 555-5555 || 1(555)... || 1 (555)...
    var regex2 = /^1?\s?\(\d{3}\)\s?\d{3}\-\d{4}/;
  
    // 555 555 5555 || 1 555 555 5555 
    var regex3 = /^1?\s?\d{3}\s\d{3}\s\d{4}/;
  
    // 55555555555
    var regex4 = /^[0-9]{10}$/;
  
    if (regex1.test(str) || regex2.test(str) || regex3.test(str) ||regex4.test(str)){
      return true;
    }
    return false;
  }