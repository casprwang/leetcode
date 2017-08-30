/*
 * [62] Unique Paths
 *
 * https://leetcode.com/problems/unique-paths
 *
 * algorithms
 * Medium (41.19%)
 * Total Accepted:    149.2K
 * Total Submissions: 362.2K
 * Testcase Example:  '1\n2'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * How many possible unique paths are there?
 * 
 * 
 * 
 * Above is a 3 x 7 grid. How many possible unique paths are there?
 * 
 * 
 * Note: m and n will be at most 100.
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m,n)=>{
  const grid = new Array(m).fill().map(_=>new Array(n).fill(0))
  for (let i  = 0 ; i< m; i++){
    for (let j = 0; j<n ; j++){
      if(j===0 || i ===0) grid[i][j]=1
      else {
        grid[i][j]= grid[i-1][j] + grid [i][j-1]
      }
    }
  }
  return grid[m-1][n-1]
}
