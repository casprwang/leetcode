/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar (s) {
  for (let i = 0; i < s.length; i++) {
    let item = s[i]
    if (s.indexOf(item) === s.lastIndexOf(item)) return i
  }

  return -1
}
