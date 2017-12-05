/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = n => {
  if (n === 0) return 0
  let counter = 0
  while (Math.abs(n)>=1) {
    counter += ~~(n / 5)
    n /= 5
  }

  return counter
}