/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (nums, i, j) => {
  ;[nums[i], nums[j]] = [nums[j], nums[i]]
}

const wiggleSort = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 === 0) {
      if (nums[i] > nums[i + 1]) {
        swap(nums, i, i + 1)
      }
    } else if (nums[i] < nums[i + 1]) {
      swap(nums, i, i + 1)
    }
  }
}