/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (
  s,
  count = 0
) => {
  const checkPal = (start, end) => {
    while (
      start >= 0 &&
      end < s.length &&
      s[start] === s[end]
    ) {
      count++
      start--
      end++
    }
  }

  for (let i = 0; i < s.length; i++) {
    checkPal(i, i)
    checkPal(i, i + 1)
  }

  return count
}