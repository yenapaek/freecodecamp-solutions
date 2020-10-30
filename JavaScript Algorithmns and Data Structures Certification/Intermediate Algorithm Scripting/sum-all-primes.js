/* Intermediate Algorithm Scripting: Sum All Primes */

/*
Problem: A prime number is a whole number greater than 1 with
exactly two divisors: 1 and itself.
For example, 2 is a prime number because it is only divisible by 1 and 2.
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Return the sum of all prime numbers that are less than or equal to num.
*/

/* Solution */

function sumPrimes(num) {

    var primeArr = [];

    // loop through all numbers between 2 (inclusive) to number (not inclusive)
    // start at 2 because we know that the number is divisible by 1
    // check for a 0 remainder
    // if there is no 0 remainder, return true

    // check if number is prime
    function isPrime(n){
        for (let a = 2; a < n; a++){
            if (n%a === 0){
              return false;
            }
        }
        return true;
    }

    // add prime numbers to array
   for (let i = num; i > 1; i--){
        if (isPrime(i)){
            primeArr.unshift(i);
        }
    }

    // sum of all prime numbers
    return primeArr.reduce((a, b) => a+b);
}

function smallestCommons(arr) {
    // make an array that adds all the numbers between the parameters
    var tempArr = [];
    var startNum, endNum;
    var index = 0;
  
    if (arr[0] < arr[1]){
        startNum = arr[0];
        endNum = arr[1];
    }
    else {
      startNum = arr[1];
      endNum = arr[0];
    }
    console.log(startNum);
  
    // populate tempArr with sequential numbers
    for (let i = startNum; i <= endNum; i++){
      tempArr[index] = i;
      index++;
    }
    console.log(tempArr);
  
    function findPrimeFactors(x) {
      var factorArr = [];
      for (let a = x; a > 0; a--){
        if (x%a === 0){
          factorArr.unshift();
        }
      }
      return factorArr;
    }
  
    // check for smallest common multiple
    return arr;
  }

  function smallestCommons(arr) {
    var range = [];
  
    // populate tempArr with sequential numbers
      for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--){
        range.push(i);
      }
  
    // function to find greatest common denominator
    function gcd(a, b) 
    { 
      if (b === 0) { 
          return a;
      }
      return gcd(b, a % b); 
    } 
  
    // can use reduce() in place of this block
    var lcm = range[0];
  
    for (let a = 1; a < range.length; a++) {
      var GCD = gcd(lcm, range[a]);
      lcm = (lcm * range[a]) / GCD;
    }
    return lcm;
  }
  
  console.log(smallestCommons([5,1]));