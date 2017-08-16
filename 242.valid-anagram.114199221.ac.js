/*
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram
 *
 * algorithms
 * Easy (46.38%)
 * Total Accepted:    165.4K
 * Total Submissions: 356.7K
 * Testcase Example:  '""\n""'
 *
 * Given two strings s and t, write a function to determine if t is an anagram
 * of s. 
 * 
 * For example,
 * s = "anagram", t = "nagaram", return true.
 * s = "rat", t = "car", return false.
 * 
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => [...s].sort().join('') === [...t].sort().join('')
