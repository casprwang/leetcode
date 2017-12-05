/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
  let right = 0

  for (let i = 0; i < nums.length; i++) {
    if (right < i) return false
    right = Math.max(right, i + nums[i])
  }

  return right >= nums.length - 1
};