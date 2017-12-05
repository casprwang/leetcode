/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = nums => {
  let set = new Set()


  let res = []
  for(let i=0;i<nums.length;i++){
    if(set.has(nums[i])) res.push(nums[i])
    set.add(nums[i])
  }

  return res
};