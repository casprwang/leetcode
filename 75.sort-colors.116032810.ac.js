/*
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors
 *
 * algorithms
 * Medium (38.00%)
 * Total Accepted:    171.8K
 * Total Submissions: 452.1K
 * Testcase Example:  '[0]'
 *
 * 
 * Given an array with n objects colored red, white or blue, sort them so that
 * objects of the same color are adjacent, with the colors in the order red,
 * white and blue.
 * 
 * 
 * 
 * Here, we will use the integers 0, 1, and 2 to represent the color red,
 * white, and blue respectively.
 * 
 * 
 * 
 * Note:
 * You are not suppose to use the library's sort function for this problem.
 * 
 * 
 * click to show follow up.
 * 
 * 
 * Follow up:
 * A rather straight forward solution is a two-pass algorithm using counting
 * sort.
 * First, iterate the array counting number of 0's, 1's, and 2's, then
 * overwrite array with total number of 0's, then 1's and followed by 2's.
 * Could you come up with an one-pass algorithm using only constant space?
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  let count = [0, 0, 0]
  nums.forEach(v => count[v]++)
  nums.fill(0, 0, count[0])
  nums.fill(1, count[0], count[0] + count[1])
  nums.fill(2, count[0] + count[1], nums.length)
}
