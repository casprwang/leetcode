/**
 * @param {string} s
 * @return {string}
 */
const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

const reverseVowels = s => {
  s = [...s]  // O(n)
  let p1 = 0
  let p2 = s.length - 1

  while (p1 < p2) {  // O(n)
    let left = s[p1]
    let right = s[p2]

    if (!set.has(left)) {
      p1++
      continue
    }

    if (!set.has(right)) {
      p2--
      continue
    }

    swap(s, p1, p2)
    p1++
    p2--
  }

  return s.join('')
}

const swap = (s, i, j) => {
  [s[i], s[j]] = [s[j], s[i]]
}
