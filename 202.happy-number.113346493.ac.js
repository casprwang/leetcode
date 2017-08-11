/*
 * [202] Happy Number
 *
 * https://leetcode.com/problems/happy-number
 *
 * algorithms
 * Easy (40.58%)
 * Total Accepted:    128K
 * Total Submissions: 315.3K
 * Testcase Example:  '1'
 *
 * Write an algorithm to determine if a number is "happy".
 * 
 * A happy number is a number defined by the following process: Starting with
 * any positive integer, replace the number by the sum of the squares of its
 * digits, and repeat the process until the number equals 1 (where it will
 * stay), or it loops endlessly in a cycle which does not include 1. Those
 * numbers for which this process ends in 1 are happy numbers.
 * 
 * Example: 19 is a happy number
 * 
 * 
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 * 
 * 
 * Credits:Special thanks to @mithmatt and @ts for adding this problem and
 * creating all test cases.
 */
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
  let set = new Set()

  while (n !== 1) {
    if (set.has(n)) return false
    set.add(n)

    let tmp = 0
    n.toString().split("").forEach(e => {
      tmp += e ** 2
    })
    n = tmp
  }
  return true
}
