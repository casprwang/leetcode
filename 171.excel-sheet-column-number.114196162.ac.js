/*
 * [171] Excel Sheet Column Number
 *
 * https://leetcode.com/problems/excel-sheet-column-number
 *
 * algorithms
 * Easy (47.06%)
 * Total Accepted:    136.1K
 * Total Submissions: 289.1K
 * Testcase Example:  '"A"'
 *
 * Related to question Excel Sheet Column Title
 * Given a column title as appear in an Excel sheet, return its corresponding
 * column number.
 * 
 * For example:
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28 
 * 
 * Credits:Special thanks to @ts for adding this problem and creating all test
 * cases.
 */
/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = s => 
  s.split('').reverse().reduce((acc, e, i)=>{
    return acc+ letterToNumber(e) * 26 **i
  }, 0)

const letterToNumber = s => 
  s.charCodeAt(0) - 64
