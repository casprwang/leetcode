/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  k = k % nums.length
  Array.prototype.unshift.apply(nums, nums.splice(nums.length - k, k))
}