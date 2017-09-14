/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => 
  nums.reduce((acc,e,i)=>{
    if(acc.hash[e]!== undefined && Math.abs( acc.hash[e] -i)<= k) acc.output= true
    acc.hash[e] = i
    return acc
  },{hash:{}, output: false}).output