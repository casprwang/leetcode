/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = n => {
  const isPrime = new Array(n).fill(true)

  let count = 0

  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++
      for (let j = 0; i * j < n; j++) {
        isPrime[i * j] = false
      }
    }
  }

  return count
}