/*
 * [647] Palindromic Substrings
 *
 * https://leetcode.com/problems/palindromic-substrings
 *
 * algorithms
 * Medium (56.20%)
 * Total Accepted:    8K
 * Total Submissions: 14.2K
 * Testcase Example:  '"abc"'
 *
 * 
 * Given a string, your task is to count how many palindromic substrings in
 * this string.
 * 
 * 
 * 
 * The substrings with different start indexes or end indexes are counted as
 * different substrings even they consist of same characters. 
 * 
 * 
 * Example 1:
 * 
 * Input: "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 * 
 * 
 * 
 * Note:
 * 
 * The input string length won't exceed 1000.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (
  s,
  set = new Set()
) =>{
  const iter = temp => {
    if (temp.length ===0) return
    if (isPali(temp)) set.add(temp)
    iter(temp.slice(1))
    set.add(temp.slice(0,1))
  }
  iter(s)
  return set.size
}

const isPali = s => {
  return [...s].reverse().join('') === [...s].join('')
}
