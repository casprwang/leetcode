/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let set = new Set()
  let output = []
  nums.forEach((e,ind)=>{
    if (set.has(e)) output =[ind, nums.indexOf(target -e)].sort()
    set.add(target - e)
  })
  return output
}