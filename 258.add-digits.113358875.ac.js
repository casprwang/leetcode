/*
 * [258] Add Digits
 *
 * https://leetcode.com/problems/add-digits
 *
 * algorithms
 * Easy (51.11%)
 * Total Accepted:    168.3K
 * Total Submissions: 329.3K
 * Testcase Example:  '0'
 *
 * 
 * Given a non-negative integer num, repeatedly add all its digits until the
 * result has only one digit. 
 * 
 * 
 * 
 * For example:
 * 
 * 
 * Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only
 * one digit, return it.
 * 
 * 
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 * 
 * 
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and
 * creating all test cases.
 */
/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  if (num>=0 && num < 10) return num
  return addDigits(num.toString().split('').reduce((acc,cur)=>{
    return acc+= Number(cur)
  }, 0))
};
