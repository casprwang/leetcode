/*
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number
 *
 * algorithms
 * Easy (54.40%)
 * Total Accepted:    230.2K
 * Total Submissions: 423.1K
 * Testcase Example:  '[1]'
 *
 * Given an array of integers, every element appears twice except for one. Find
 * that single one.
 * 
 * 
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums =>{
  let set = new Set()
  return [
    ...nums.reduce((acc, e)=>{
      if(acc.has(e)) acc.delete(e)
      else acc.add(e)
      return acc
    }, set)
  ][0]
}
