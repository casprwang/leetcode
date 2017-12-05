/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// time: O(kn) = O(n)  (k is constant from input)

const lengthOfLongestSubstringKDistinct = (s, k) => {
  let start = 0
  let end = 0
  let kinds = 0
  let len = 0
  let map = {}
  while (end < s.length) {
    let endChar = s[end]
    if (map[endChar] === undefined) {
      map[endChar] = 0
    }
    if (map[endChar] === 0) {
      kinds++
    }

    map[endChar]++
    end++

    while (kinds > k) {
      let startChar = s[start]
      map[startChar]--
      if (map[startChar] === 0) {
        kinds--
      }

      start++
    }

    len = Math.max(len, end - start)
  }

  return len
}