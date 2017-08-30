/*
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations
 *
 * algorithms
 * Medium (39.66%)
 * Total Accepted:    120.5K
 * Total Submissions: 303.7K
 * Testcase Example:  '4\n2'
 *
 * 
 * Given two integers n and k, return all possible combinations of k numbers
 * out of 1 ... n.
 * 
 * 
 * For example,
 * If n = 4 and k = 2, a solution is:
 * 
 * 
 * 
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (k, n, result = []) => {
  const iter = temp => {
    if(temp.length===n) result.push([...temp])
    else {
      for (let i = 1; i<=k; i++) {
        if(i<=temp[temp.length -1]) continue
        temp.push(i)
        iter(temp)
        temp.pop()
      }
    }
  }
  iter([])
  return result
}
