/*
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses
 *
 * algorithms
 * Medium (44.95%)
 * Total Accepted:    156.7K
 * Total Submissions: 348.5K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  let result = []

  const dfs = (str, left, right, n) => {
    if (left === n && right === n) {
      result.push(str)
      return
    }
    if (left < n) dfs(str + '(', left + 1, right, n)
    if (right < n && right < left) dfs(str + ')', left, right + 1, n)
  }
  dfs('', 0, 0, n)
  return result
};
