/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n) {
  let jumps = Array(10)
    .fill()
    .map(r => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  jumps[1][3] = jumps[3][1] = 2
  jumps[7][9] = jumps[9][7] = 8
  jumps[1][7] = jumps[7][1] = 4
  jumps[3][9] = jumps[9][3] = 6
  jumps[2][8] = jumps[8][2] = jumps[4][6] = jumps[6][4] = jumps[1][9] = jumps[9][1] = jumps[3][7] = jumps[7][3] = 5

  let visited = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]
  let res = 0

  for (let i = m; i <= n; i++) {
    res += dfs(jumps, 1, i - 1, visited) * 4
    res += dfs(jumps, 5, i - 1, visited)
    res += dfs(jumps, 2, i - 1, visited) * 4
  }
  return res
}

function dfs(jumps, curStart, remain, visited) {
  if (remain < 0) {
    return 0
  }
  if (remain === 0) {
    return 1
  }
  visited[curStart] = true

  let tmp_res = 0

  for (let i = 1; i <= 9; i++) {
    if (
      visited[i] === false &&
      (jumps[curStart][i] === 0 || visited[jumps[curStart][i]] === true)
    ) {
      tmp_res += dfs(jumps, i, remain - 1, visited)
    }
  }

  visited[curStart] = false
  return tmp_res
}
