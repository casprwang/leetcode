/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
  let set = new Set()

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i]
    if (set.has(item)) return true
    set.add(item)
  }

  return false
}