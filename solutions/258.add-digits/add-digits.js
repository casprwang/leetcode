/**
 * @param {number} num
 * @return {number}
 */
const addDigits = num => {
  if (num === 0) return 0
  if (num > 0 && num < 10) {
    return num
  } else {
    let sum = 0
    while (num >= 1) {
      sum += num % 10
      num = Math.floor(num / 10)
    }

    return addDigits(sum)
  }
}
