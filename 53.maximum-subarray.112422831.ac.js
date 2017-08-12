/*
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray
 *
 * algorithms
 * Easy (39.55%)
 * Total Accepted:    213.2K
 * Total Submissions: 539K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 
 * Find the contiguous subarray within an array (containing at least one
 * number) which has the largest sum.
 * 
 * 
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * click to show more practice.
 * 
 * More practice:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let max = 0
  let temp = 0

  if (nums.every(e => e < 0)) return Math.max(...nums)
  else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] + temp > -1) {
        if (nums[i] + temp > max) {
          max = nums[i] + temp
        }
        temp += nums[i]
      } else {
        temp = 0
      }
    }
    return max
  }
}
