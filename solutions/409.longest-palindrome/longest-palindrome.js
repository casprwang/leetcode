/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  let hash = {}

  for (let item of s) hash[item] = ~~hash[item] + 1

  let exsitsOld = false
  let ans = 0

  hash
  for (let key in hash) {
    let cnt = hash[key]
    cnt
    ans += cnt & 1 ? cnt - 1 : cnt
    if (cnt & 1 === 1) exsitsOld = true
//  cnt & 1 && (existOld = true)
  }

  return ans + exsitsOld
};