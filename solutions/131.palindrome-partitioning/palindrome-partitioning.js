/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = s => {
  let res = []

  const backtrack = (temp, pos) => {
    if (pos === s.length) {
      res.push(temp)
      return
    }

    for (let i = pos; i < s.length; i++) {
      let sub = s.substring(pos, i + 1)
      if (sub === '') continue

      if (isPali(sub)) {
        backtrack([...temp, sub], i + 1)
      }
    }
  }

  backtrack([], 0)

  return res
}


const isPali = s => {
  let p1 = 0
  let p2 = s.length - 1

  while (p1 < p2) {
    if (s[p1] !== s[p2]) return false
    p1++
    p2--
  }

  return true
}

