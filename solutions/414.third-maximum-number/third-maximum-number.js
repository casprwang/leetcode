/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let set = new Set()
  if (nums.length < 3) return Math.max(...nums)
  
  for (let i of nums.sort((a,b)=> b-a)) {
    if (!set.has(i)) set.add(i)
    if (set.size>2 ) return [...set][2]
  }
  if (set.size<3) return Math.max(...set)
}