/*
 * [300] Longest Increasing Subsequence
 *
 * https://leetcode.com/problems/longest-increasing-subsequence
 *
 * algorithms
 * Medium (38.38%)
 * Total Accepted:    86.8K
 * Total Submissions: 226.1K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 
 * Given an unsorted array of integers, find the length of longest increasing
 * subsequence.
 * 
 * 
 * For example,
 * Given [10, 9, 2, 5, 3, 7, 101, 18],
 * The longest increasing subsequence is [2, 3, 7, 101], therefore the length
 * is 4. Note that there may be more than one LIS combination, it is only
 * necessary for you to return the length.
 * 
 * 
 * Your algorithm should run in O(n2) complexity.
 * 
 * 
 * Follow up: Could you improve it to O(n log n) time complexity? 
 * 
 * Credits:Special thanks to @pbrother for adding this problem and creating all
 * test cases.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = nums=> {
  if (!nums.length) return 0
  const record = [1, ...new Array(nums.length-1)]
  for (var i = 1; i < nums.length; i++) {
    record[i] = 1
    for (var j = 0; j < i; j++) {
      if (nums[i] > nums[j])
        record[i] = Math.max(record[i], record[j] + 1)
    }
  }
  return Math.max(...record)
}
