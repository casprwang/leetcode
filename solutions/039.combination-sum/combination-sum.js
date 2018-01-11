/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  let res = []

  const bfs = (temp, left, pos) => {
    if (left < 0) return

    if (left === 0) {
      res.push(temp)
      return
    }

    // can use same position again but not the position before
    for (let i = pos; i < candidates.length; i++) {
      bfs([...temp, candidates[i]], left - candidates[i], i)
    }
  }

  bfs([], target, 0)

  return res
};
