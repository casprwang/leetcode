/**
 * @param {number[]} nums
 * @return {number}
 */

// const jump = function (nums) {
//   if (!Array.isArray(nums) || nums.length === 0) {
//     return -1
//   }

//   if (nums.length === 1) {
//     return 0
//   }

//   let curJump = nums[0]
//   let nextJump = nums[0]
//   let step = 1

//   for (let i = 1; i < nums.length; i++) {
//     if (curJump < i) {
//       curJump = nextJump
//       step++
//     }

//     if (nextJump < i + nums[i]) {
//       nextJump = i + nums[i]
//     }

//     if (curJump >= nums.length - 1) {
//       return step
//     }
//   }
// };

const jump = nums => {
  let len = nums.length

  if (len < 2) return 0
  let step = 0
  let curReach = 0
  let maxReach = 0

  let i = 0

  while (curReach - (i - 1) > 0) {
    step++

    while (i <= curReach) {
      maxReach = Math.max(maxReach, nums[i] + i)

      if (maxReach >= len - 1) return step
      i++
    }

    curReach = maxReach
  }

  return 0
};