/*
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs
 *
 * algorithms
 * Easy (39.86%)
 * Total Accepted:    181.4K
 * Total Submissions: 455.2K
 * Testcase Example:  '1'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * 
 * Note: Given n will be a positive integer.
 * 
 */
const climbStairs = function(n) {
  let arr = [1, 2]
  if (n === 1) return 1
  for (let i = 0; i < n - 1; i++) {
    let sum = arr[0] + arr[1]
    arr = [arr[1], sum]
  }
  return arr[0]
}
