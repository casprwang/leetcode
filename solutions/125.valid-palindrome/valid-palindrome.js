/**
 * @param {string} s
 * @return {boolean}
 */
// const isPalindrome = s => isPali(s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())

// const isPali = s => {
//   let low = 0
//   let high = s.length - 1
//   while (high > low) {
//     if (s[low] !== s[high]) return false
//     high++
//     low--
//   }
//   return true
// }

const isPalindrome = s => isPali(s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())

// const isPali = s => [...s].reverse().join('') === s

const isPali = s => {
  let low = 0
  let high = s.length - 1
  while (high > low) {
    if (s[low] !== s[high]) return false
    high--
    low++
  }
  return true
}
