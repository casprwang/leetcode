/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
  let len = nums.length

  for (let i = 0; i < len; i++) {
    let item = nums[i]
    if (nums.indexOf(item) !== nums.lastIndexOf(item)) return item
  }
}
