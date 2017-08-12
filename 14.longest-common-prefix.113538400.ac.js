/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix
 *
 * algorithms
 * Easy (31.46%)
 * Total Accepted:    191.1K
 * Total Submissions: 607.5K
 * Testcase Example:  '[]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  if (!strs.length) return ""
  let len = strs.reduce((acc, e) => {
    if (e.length < acc) acc = e.length
    return acc
  }, Number.MAX_VALUE)

  let output = ""

  for (let i = 0; i < len; i += 1) {
    if (!strs.every(e => e[i] === strs[0][i])) break
    output += strs[0][i]
  }

  return output
}
