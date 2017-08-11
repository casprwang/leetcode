/*
 * [278] First Bad Version
 *
 * https://leetcode.com/problems/first-bad-version
 *
 * algorithms
 * Easy (25.22%)
 * Total Accepted:    106K
 * Total Submissions: 420.4K
 * Testcase Example:  '1 version\n1 is the first bad version.'
 *
 * 
 * You are a product manager and currently leading a team to develop a new
 * product. Unfortunately, the latest version of your product fails the quality
 * check. Since each version is developed based on the previous version, all
 * the versions after a bad version are also bad. 
 * 
 * 
 * 
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the
 * first bad one, which causes all the following ones to be bad.
 * 
 * 
 * 
 * You are given an API bool isBadVersion(version) which will return whether
 * version is bad. Implement a function to find the first bad version. You
 * should minimize the number of calls to the API.
 * 
 * 
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and
 * creating all test cases.
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = isBadVersion => n => {
  let head = 1
  let tail = n
  let mid
  while (tail > head + 1) {
    mid = parseInt((head + tail) / 2)
    if (isBadVersion(mid)) tail = mid
    else head = mid
  }
  return isBadVersion(head) ? head : tail
}
