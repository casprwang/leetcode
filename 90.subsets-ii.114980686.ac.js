/*
 * [90] Subsets II
 *
 * https://leetcode.com/problems/subsets-ii
 *
 * algorithms
 * Medium (36.08%)
 * Total Accepted:    115.1K
 * Total Submissions: 318.9K
 * Testcase Example:  '[1,2,2]'
 *
 * 
 * Given a collection of integers that might contain duplicates, nums, return
 * all possible subsets.
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * 
 * For example,
 * If nums = [1,2,2], a solution is:
 * 
 * 
 * 
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const subsetsWithDup = (nums, res = new Set()) => {
  nums.sort()
  const iter = (temp, pos) => {

    for (let i = pos; i < nums.length; i++) {
      res.add(JSON.stringify([...temp, nums[i]]))
      iter([...temp,nums[i]], i + 1)
    }
  }

  iter([], 0)
  return [...res, '[]'].map(JSON.parse)
}
