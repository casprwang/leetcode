/*
 * [231] Power of Two
 *
 * https://leetcode.com/problems/power-of-two
 *
 * algorithms
 * Easy (40.17%)
 * Total Accepted:    142.7K
 * Total Submissions: 355.2K
 * Testcase Example:  '1'
 *
 * 
 * Given an integer, write a function to determine if it is a power of two.
 * 
 * 
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and
 * creating all test cases.
 */
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => {
  if (n === 1) return true
  if (!Number.isInteger(n) || n ===0 || n< 0) return false
  else return isPowerOfTwo(n/2)
}
