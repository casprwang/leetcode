/*
 * [414] Third Maximum Number
 *
 * https://leetcode.com/problems/third-maximum-number
 *
 * algorithms
 * Easy (27.88%)
 * Total Accepted:    39.2K
 * Total Submissions: 140.6K
 * Testcase Example:  '[3,2,1]'
 *
 * Given a non-empty array of integers, return the third maximum number in this
 * array. If it does not exist, return the maximum number. The time complexity
 * must be in O(n).
 * 
 * Example 1:
 * 
 * Input: [3, 2, 1]
 * 
 * Output: 1
 * 
 * Explanation: The third maximum is 1.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [1, 2]
 * 
 * Output: 2
 * 
 * Explanation: The third maximum does not exist, so the maximum (2) is
 * returned instead.
 * 
 * 
 * 
 * Example 3:
 * 
 * Input: [2, 2, 3, 1]
 * 
 * Output: 1
 * 
 * Explanation: Note that the third maximum here means the third maximum
 * distinct number.
 * Both numbers with value 2 are both considered as second maximum.
 * 
 * 
 */
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
};
