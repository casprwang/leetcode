/*
 * [263] Ugly Number
 *
 * https://leetcode.com/problems/ugly-number
 *
 * algorithms
 * Easy (39.18%)
 * Total Accepted:    103.9K
 * Total Submissions: 265.1K
 * Testcase Example:  '-2147483648'
 *
 * 
 * Write a program to check whether a given number is an ugly number.
 * 
 * 
 * 
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 * For example, 6, 8 are ugly while 14 is not ugly since it includes another
 * prime factor 7.
 * 
 * 
 * 
 * Note that 1 is typically treated as an ugly number.
 * 
 * 
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and
 * creating all test cases.
 */
/**
 * @param {number} num
 * @return {boolean}
 */

const isUgly = n => {
  if (n < 1) return false
  if (n % 2 === 0) return isUgly(n / 2)
  if (n % 3 === 0) return isUgly(n / 3)
  if (n % 5 === 0) return isUgly(n / 5)
  return 1 === n
}
