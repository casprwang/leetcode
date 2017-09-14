/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => {
  if (n === 1) return true
  if (!Number.isInteger(n) || n ===0 || n< 0) return false
  else return isPowerOfTwo(n/2)
}