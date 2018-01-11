/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  // greedy
  if(t.length < s.length) return false

  let p = 0
  let cur = 0

  while (p < s.length) {
    let item = s[p]

    // check item in t
    if (t.indexOf(item, cur) !== -1) {
      cur = t.indexOf(item, cur) + 1
    } else {
      return false
    }
    p++
  }

  return true
}
