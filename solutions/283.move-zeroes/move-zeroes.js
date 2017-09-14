/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  for (let i =0; i<nums.length; i++){
    if (nums[i]===0) {
      for (let j = i; j<nums.length; j++){
        if(nums[j] !== 0) {
          nums[i] = nums[j]
          nums[j] = 0
          break
        }
      }
    }
  }
}