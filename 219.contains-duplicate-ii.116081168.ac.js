/*
 * [219] Contains Duplicate II
 *
 * https://leetcode.com/problems/contains-duplicate-ii
 *
 * algorithms
 * Easy (32.39%)
 * Total Accepted:    117.8K
 * Total Submissions: 363.6K
 * Testcase Example:  '[]\n0'
 *
 * 
 * Given an array of integers and an integer k, find out whether there are two
 * distinct indices i and j in the array such that nums[i] = nums[j] and the
 * absolute difference between i and j is at most k.
 * 
 */
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
