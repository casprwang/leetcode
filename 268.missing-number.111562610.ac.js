/*
 * [268] Missing Number
 *
 * https://leetcode.com/problems/missing-number
 *
 * algorithms
 * Easy (44.20%)
 * Total Accepted:    123.9K
 * Total Submissions: 280.2K
 * Testcase Example:  '[0]'
 *
 * 
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 * 
 * 
 * For example,
 * Given nums = [0, 1, 3] return 2.
 * 
 * 
 * 
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement
 * it using only constant extra space complexity?
 * 
 * 
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and
 * creating all test cases.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const supposesum = (0 + nums.length) * (nums.length + 1) / 2
  const realsum = nums.reduce((pre, cur) => pre + cur)
  return supposesum - realsum
}
