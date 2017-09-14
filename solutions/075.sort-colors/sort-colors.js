/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  let count = [0, 0, 0]
  nums.forEach(v => count[v]++)
  nums.fill(0, 0, count[0])
  nums.fill(1, count[0], count[0] + count[1])
  nums.fill(2, count[0] + count[1], nums.length)
}