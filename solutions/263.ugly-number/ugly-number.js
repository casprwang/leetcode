/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = num => {
  if (num < 1) return false
  if (num === 1) return true
  if (Number.isInteger(num / 2)) return isUgly(num / 2)
  if (Number.isInteger(num / 3)) return isUgly(num / 3)
  if (Number.isInteger(num / 5)) return isUgly(num / 5)
  return false
}