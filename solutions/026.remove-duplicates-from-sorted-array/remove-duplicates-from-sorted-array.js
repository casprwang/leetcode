/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let set = new Set()
  for(let i =0; i<nums.length; i++){
    if(set.has(nums[i])) {
      nums.splice(i, 1)
      i--
    }
    else set.add(nums[i]) 
  }
  return nums.length
};