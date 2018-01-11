/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let j = 0
  let len = nums.length

  for (let i = 0; i < len; i++) {
    let item = nums[i]
    if (item !== 0) {
      nums[j] = item
      j++
    }
  }

  while (j < len) {
    nums[j] = 0
    j++
  }

}