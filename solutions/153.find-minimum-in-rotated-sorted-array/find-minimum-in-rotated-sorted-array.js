/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = nums => {
  let min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let item = nums[i]
    if (item < min) return item

    min = Math.min(min, item)
  }

  return min
}