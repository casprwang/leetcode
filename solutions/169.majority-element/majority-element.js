/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  return nums.reduce((acc,e)=>{
    if (acc.hash[e]+1 >= nums.length/2) acc.output = e
    else acc.hash[e] = acc.hash[e]+1 || 1
    return acc
  }, {hash:{}, output:nums[0]}).output
}