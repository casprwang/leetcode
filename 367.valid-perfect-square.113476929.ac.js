/*
 * [367] Valid Perfect Square
 *
 * https://leetcode.com/problems/valid-perfect-square
 *
 * algorithms
 * Easy (38.14%)
 * Total Accepted:    48.5K
 * Total Submissions: 127.2K
 * Testcase Example:  '16'
 *
 * Given a positive integer num, write a function which returns True if num is
 * a perfect square else False.
 * 
 * 
 * Note: Do not use any built-in library function such as sqrt.
 * 
 * 
 * Example 1:
 * 
 * Input: 16
 * Returns: True
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: 14
 * Returns: False
 * 
 * 
 * 
 * Credits:Special thanks to @elmirap for adding this problem and creating all
 * test cases.
 */
/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = num => {
  // using binary search
  end = num
  begin = 1
  while (end > begin + 1) {
    mid = parseInt((end + begin) / 2)
    if (mid ** 2 > num) end = mid
    else if (mid ** 2 < num) begin = mid
    else return true
  }
  return false || end ** 2 === num
}
