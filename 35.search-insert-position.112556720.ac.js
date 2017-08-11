/*
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position
 *
 * algorithms
 * Easy (39.69%)
 * Total Accepted:    186.9K
 * Total Submissions: 470.8K
 * Testcase Example:  '[1]\n0'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * 
 * Here are few examples.
 * [1,3,5,6], 5 → 2
 * [1,3,5,6], 2 → 1
 * [1,3,5,6], 7 → 4
 * [1,3,5,6], 0 → 0
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let max = Math.max(...nums)

  if (nums.includes(target)) return nums.indexOf(target)
  else {
    if (target < max) {
      return nums.findIndex(e => e > target)
    } else {
      return nums.length
    }
  }
}
