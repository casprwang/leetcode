/*
 * [167] Two Sum II - Input array is sorted
 *
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 *
 * algorithms
 * Easy (47.03%)
 * Total Accepted:    89.7K
 * Total Submissions: 190.7K
 * Testcase Example:  '[2,3,4]\n6'
 *
 * Given an array of integers that is already sorted in ascending order, find
 * two numbers such that they add up to a specific target number.
 * 
 * The function twoSum should return indices of the two numbers such that they
 * add up to the target, where index1 must be less than index2. Please note
 * that your returned answers (both index1 and index2) are not zero-based.
 * 
 * You may assume that each input would have exactly one solution and you may
 * not use the same element twice.
 * 
 * 
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 * 
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) =>{
  let set = new Set()
  return numbers.reduce((acc, e, i)=>{
    if(acc.set.has(e)) acc.ans= [ numbers.indexOf(target-e)+1, i+1 ]
    else acc.set.add(target - e)
    return acc
  }, {set, ans:[]}).ans
}
