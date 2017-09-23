/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = nums =>{
  let hash = Array(nums.length)
  let res = 1
  for (let i =0; i<nums.length;i++){
    let temp = nums[i]
    if(hash[temp]) continue
    let cur = 0
    while(!hash[temp]) {
      hash[temp] = 1
      cur++
      temp = nums[temp]
    }
    if(cur>res) res = cur
  }
  return res
}
