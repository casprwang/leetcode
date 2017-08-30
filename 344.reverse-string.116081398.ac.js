/*
 * [344] Reverse String
 *
 * https://leetcode.com/problems/reverse-string
 *
 * algorithms
 * Easy (59.22%)
 * Total Accepted:    175K
 * Total Submissions: 295.5K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and returns the string
 * reversed.
 * 
 * 
 * Example:
 * Given s = "hello", return "olleh".
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
const reverseString = s => [...s].reverse().join('')
