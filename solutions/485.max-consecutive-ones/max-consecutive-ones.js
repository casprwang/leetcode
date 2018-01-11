/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let counter = 0
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i]

    if (item === 1) {
      counter++
    } else {
      counter = 0
    }

    max = Math.max(counter, max)
  }

  return max
}
