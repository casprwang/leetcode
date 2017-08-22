/*
 * [217] Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate
 *
 * algorithms
 * Easy (45.66%)
 * Total Accepted:    167.4K
 * Total Submissions: 366.6K
 * Testcase Example:  '[]'
 *
 * 
 * Given an array of integers, find if the array contains any duplicates. Your
 * function should return true if any value appears at least twice in the
 * array, and it should return false if every element is distinct.
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// containDuplicate :: []int -> bool
const containsDuplicate = nums => {
  let set = new Set()
  let flag = false
  nums.forEach(e=>{
    if (set.has(e)) flag = true
    set.add(e)
  })
  return flag
}
