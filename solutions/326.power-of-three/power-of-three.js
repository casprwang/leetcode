/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => 
  n < 1
  ? false
    : n === 1 
    ? true
    : isPowerOfThree(n/3)