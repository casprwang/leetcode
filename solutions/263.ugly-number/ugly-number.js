/**
 * @param {number} num
 * @return {boolean}
 */

const isUgly = n => {
  if (n < 1) return false
  if (n % 2 === 0) return isUgly(n / 2)
  if (n % 3 === 0) return isUgly(n / 3)
  if (n % 5 === 0) return isUgly(n / 5)
  return 1 === n
}