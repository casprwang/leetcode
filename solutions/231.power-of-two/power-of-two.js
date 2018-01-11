/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => {
  if (n < 1) return false
  if (n === 1) return true
  if (!Number.isInteger(n)) return false
  return isPowerOfTwo(n / 2)
}