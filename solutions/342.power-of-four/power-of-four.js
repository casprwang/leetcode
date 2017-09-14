/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = num => {
  while (num >= 4) {
    num /= 4
  }
  return num === 1
}