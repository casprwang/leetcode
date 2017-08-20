/*
 * [485] Max Consecutive Ones
 *
 * https://leetcode.com/problems/max-consecutive-ones
 *
 * algorithms
 * Easy (54.06%)
 * Total Accepted:    51K
 * Total Submissions: 94.3K
 * Testcase Example:  '[1,0,1,1,0,1]'
 *
 * Given a binary array, find the maximum number of consecutive 1s in this
 * array.
 * 
 * Example 1:
 * 
 * Input: [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive
 * 1s.
 * ⁠   The maximum number of consecutive 1s is 3.
 * 
 * 
 * 
 * Note:
 * 
 * The input array will only contain 0 and 1.
 * The length of input array is a positive integer and will not exceed 10,000
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => nums.join('').split('0').sort().pop().length
