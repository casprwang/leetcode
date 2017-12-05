/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = nums => {
  let set = new Set(nums)
  // 1,1,3
  // 1,3
  let lost
  let dup

  for(let i =1;i<=nums.length;i++) {
    if(!set.has(i)) lost = i
  }

  nums.sort()
  for(let i = 0; i<nums.length; i++) {
    if(nums[i] === nums[i+1]) dup = nums[i]
  }

  return [dup, lost]
}
