/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let left
  let right
  let start = 0
  let max = Number.MIN_VALUE

  for (var i = 0; i < s.length; i = i + 0.5) {
    left = Math.ceil(i - 1)
    right = Math.floor(i + 1)

    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        left--
        right++
      } else {
        break
      }
    }
    if (right - left - 1 > max) {
      max = right - left - 1
      start = left + 1
    }
  }

  return s.slice(start, start + max)
}