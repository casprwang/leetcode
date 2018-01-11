/**
 * @param {number} n
 * @return {number[][]}
 */
const getFactors = n => {
  let res = []

  const bfs = (temp, left, pos) => {
    if (left <= 1) {
      if (temp.length > 1) {
        res.push(temp)
      }
    }

    for (let i = pos; i <= n - 1; i++) {
      if (left % i === 0) {
        bfs([...temp, i], left / i, i)
      }
    }
  }

  bfs([], n, 2)

  return res
}