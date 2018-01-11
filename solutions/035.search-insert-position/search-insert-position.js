/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let max = Math.max(...nums)

  if (nums.includes(target)) return nums.indexOf(target)
  else {
    if (target<max) {
      return nums.findIndex(e=> e>target)
    } else { return nums.length}
  }
}