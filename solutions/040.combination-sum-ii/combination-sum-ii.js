/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  let result = []
  let visited = new Array(candidates.length).fill(false)
  candidates.sort()

  const bfs = (temp, pos, left) => {
    if (left < 0) return
    if (left === 0) {
      result.push(temp)
    }

    for (let i = pos; i < candidates.length; i++) {
      if (visited[i]) continue
      if (!visited[i - 1] && candidates[i] === candidates[i - 1]) continue

      visited[i] = true
      bfs([...temp, candidates[i]], i, left - candidates[i])
      visited[i] = false
    }
  }

  bfs([], 0, target)

  return result
}
