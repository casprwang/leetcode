/**
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = s => {
  let map = {}

  for (let i = 0; i < s.length; i++) {
    let item = s[i]

    map[item] = ~~map[item] + 1
  }

  return Object.values(map).filter(e => e & 1).length <= 1
}
