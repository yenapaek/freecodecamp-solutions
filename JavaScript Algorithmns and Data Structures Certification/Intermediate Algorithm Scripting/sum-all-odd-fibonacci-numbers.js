/* Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers */

/*
Problem: Given a positive integer num, return the sum of all
odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of the two previous numbers
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all
odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

/* Solution */

function sumFibs(num) {

    var fibArr = [1, 1];
    var nextFib;
    var sum = 0;
  
    // create an array of Fibonacci sequence up to num
    // order doesn't matter here since we are just summing the sequence
    while ((nextFib = fibArr[0] + fibArr[1]) <= num) {
      fibArr.unshift(nextFib); // sends next Fibonacci sequences to front of fibArr
    }
  
    // filter out even numbers from Fibonacci sequence
    // sum numbers
      return fibArr.filter((x) => {
        if (x % 2 != 0) {
          return true;
        }
      }).reduce((a, b) => a + b);
  }
