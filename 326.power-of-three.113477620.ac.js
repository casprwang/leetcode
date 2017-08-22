/*
 * [326] Power of Three
 *
 * https://leetcode.com/problems/power-of-three
 *
 * algorithms
 * Easy (40.20%)
 * Total Accepted:    98.7K
 * Total Submissions: 245.5K
 * Testcase Example:  '27'
 *
 * 
 * ⁠   Given an integer, write a function to determine if it is a power of
 * three.
 * 
 * 
 * ⁠   Follow up:
 * ⁠   Could you do it without using any loop / recursion?
 * 
 * 
 * Credits:Special thanks to @dietpepsi for adding this problem and creating
 * all test cases.
 */
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => 
  n < 1
  ? false
    : n === 1 
    ? true
    : isPowerOfThree(n/3)
