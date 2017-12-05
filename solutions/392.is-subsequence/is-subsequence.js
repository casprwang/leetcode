/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  if(s.length === 0) return true

  let indexS = 0
  let indexT = 0

  while(indexT < t.length) {
    if(t[indexT] === s[indexS]) {
      indexS++
      if(indexS === s.length) return true
    }

    indexT++
  }

  return false
}
