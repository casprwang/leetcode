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
  result=[]
) => {
  nums.sort()
  const iter = (temp ) => {
    result.push([...temp])
    for (let i = 0; i<nums.length; i++ ) {
      if (nums[i]<= temp[temp.length -1]) continue
      iter([...temp, nums[i]])
    }
  } 
  iter([])
  return result
}
