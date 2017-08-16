/*
 * [137] Single Number II
 *
 * https://leetcode.com/problems/single-number-ii
 *
 * algorithms
 * Medium (41.48%)
 * Total Accepted:    119.5K
 * Total Submissions: 288.1K
 * Testcase Example:  '[1]'
 *
 * 
 * Given an array of integers, every element appears three times except for
 * one, which appears exactly once. Find that single one.
 * 
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
const singleNumber = nums => 
  parseInt(
    Object.entries(
      nums.reduce((acc,e)=>{
        if(acc[e]) acc[e]+=1
        else acc[e] =1
        return acc
      },{})
    ).filter(e=>{
      if(e[1]===1) return true
      return false
    })[0][0]
  )
