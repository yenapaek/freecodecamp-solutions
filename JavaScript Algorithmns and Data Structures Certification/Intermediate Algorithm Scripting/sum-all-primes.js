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
