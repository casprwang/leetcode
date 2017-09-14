/**
 * @param {number[]} nums
 * @return {boolean}
 */

// containDuplicate :: []int -> bool
const containsDuplicate = nums => {
  let set = new Set()
  let flag = false
  nums.forEach(e=>{
    if (set.has(e)) flag = true
    set.add(e)
  })
  return flag
}