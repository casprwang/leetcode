/*
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element
 *
 * algorithms
 * Easy (46.61%)
 * Total Accepted:    205.7K
 * Total Submissions: 441.3K
 * Testcase Example:  '[1]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 * 
 * Credits:Special thanks to @ts for adding this problem and creating all test
 * cases.
 */
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
