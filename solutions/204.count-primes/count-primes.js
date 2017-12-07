/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = n => {
  const notPrime = new Array(n)
  const isPrime = num => !notPrime[num]
  var count = 0
    
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++
      // calculate all multiples of this prime number
      // and add them to the notPrime array
      for (let j = 2; i*j < n; j++) {
        notPrime[i*j] = true
      }
    }
  }
  return count
}