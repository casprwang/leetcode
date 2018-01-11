/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
  let arr = Array(n).fill(false)

  let res = []

  const bfs = (temp, left) => {
    if (temp.length === k && left === 0) {
      res.push(temp)
      return
    }

    for (let i = 0; i < 9; i++) {
      if (arr[i]) return
      arr[i] = true
      bfs([...temp, i + 1], left - i - 1)
      arr[i] = false
    }
  }

  bfs([], n)

  return res
}
