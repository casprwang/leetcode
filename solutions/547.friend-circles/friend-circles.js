/**
 * @param {number[][]} M
 * @return {number}
 */

const dfs = (M, visited,i) => {
  for (let j = 0; j < M.length; j++) {
    if (M[i][j] == 1 && !visited[j]) {
      visited[j] = 1
      dfs(M, visited, j)
    }
  }
}
const findCircleNum = function(M) {
  let visited = {}
  let count = 0
  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      dfs(M, visited, i)
      count++
    }
  }
  return count
}