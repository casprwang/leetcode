/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = s => {
  let map = {}

  for (let letter of s) {
    map[letter] = ~~map[letter] + 1
  }

  let maxOdd = 0
  let evenSum = 0
  let hasOdd = 0
  
  for (let val of Object.values(map)) {
    if (val & 1) {
      // odd
      evenSum += val - 1
      hasOdd = 1
    } else {
      evenSum += val
    }
  }

  return maxOdd + evenSum + hasOdd
}
