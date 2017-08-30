/*
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets
 *
 * algorithms
 * Medium (40.56%)
 * Total Accepted:    174K
 * Total Submissions: 429K
 * Testcase Example:  '[1,2,3]'
 *
 * 
 * Given a set of distinct integers, nums, return all possible subsets.
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * 
 * For example,
 * If nums = [1,2,3], a solution is:
 * 
 * 
 * 
 * [
 * ⁠ [3],
 * ⁠ [1],
 * ⁠ [2],
 * ⁠ [1,2,3],
 * ⁠ [1,3],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (
  nums,
  result=new Set()
)=> {
  const iter = (temp, pos) => {
    for (let i =pos; i<nums.length ; i++) {
      result.add(JSON.stringify([...temp, nums[i]]))
      iter([...temp, nums[i]], i+1)
    }
  } 
  iter([], 0)
  return [...result, '[]'].map(JSON.parse)
}
