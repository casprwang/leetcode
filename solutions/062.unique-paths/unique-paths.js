/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  let dp = []

  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n)
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
    for (let j = 0; j < n; j++) {
      dp[0][j] = 1

      if (i > 0 && j > 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[m - 1][n - 1]
}