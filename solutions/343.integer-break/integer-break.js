/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = n => {
  if (n <= 3) {
    return n - 1
  } else {
    switch (n % 3) {
      case 0:
        return Math.pow(3, n / 3)
      case 1:
        return Math.pow(3, (n - 4) / 3) * 4
      case 2:
        return Math.pow(3, (n - 2) / 3) * 2
    }
  }
}