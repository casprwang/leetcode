/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
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