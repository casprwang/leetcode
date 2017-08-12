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

const subsetsWithDup = nums => {
  nums.sort((x, y) => x - y)
  return findSubsets([], nums, 0)
}

const findSubsets = (subset, nums, index) => {
  const subsets = [subset]
  for (let i = index; i < nums.length; i += 1) {
    if (i === index || nums[i] !== nums[i - 1]) {
      subsets.push(...findSubsets([...subset, nums[i]], nums, i + 1))
    }
  }

  return subsets
}
