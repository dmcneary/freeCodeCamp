/*Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

This is my code: it doesn't work.

function sumPrimes(num) {
  const sieve = new Array(num).fill(true);
  console.log(sieve.length)
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (sieve[i]) {
      for (let j = Math.pow(i, 2); j < num; j += i) {
        sieve[j] = false;
      }
    }
  }
  return sieve.reduce((primes, isPrime, i) => {
    if (isPrime) {
      primes.push(i);
    }
    return primes
  }, []).reduce((a, b) => a + b)
  }
*/
//fCC solution
function sumPrimes(num) {
  // step 1	
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  // step 2
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1;
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false;
        m--;
    }
      return true;
  });
  // step 3
  return onlyPrimes.reduce((a,b) => a+b); 
}
sumPrimes(10);