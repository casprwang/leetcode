/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = nums => {
  let set = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])){
      set.delete(nums[i])
      continue
    }
    set.add(nums[i])
  }

  return [...set]
}
