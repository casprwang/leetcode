/*
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses
 *
 * algorithms
 * Easy (33.34%)
 * Total Accepted:    221.5K
 * Total Submissions: 664.3K
 * Testcase Example:  '"["'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * The brackets must close in the correct order, "()" and "()[]{}" are all
 * valid but "(]" and "([)]" are not.
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  let stack = []
  let map = new Map([["(", ")"], ["{", "}"], ["[", "]"]])
  s.split("").forEach(e => {
    if (stack.length === 0) stack.push(e)
    else if (e === map.get(stack[stack.length - 1])) stack.pop()
    else stack.push(e)
  })
  return stack.length === 0
}
