/*
 * [500] Keyboard Row
 *
 * https://leetcode.com/problems/keyboard-row
 *
 * algorithms
 * Easy (59.95%)
 * Total Accepted:    36.4K
 * Total Submissions: 60.6K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * Given a List of words, return the words that can be typed using letters of
 * alphabet on only one row's of American keyboard like the image
 * below. 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: ["Hello", "Alaska", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"]
 * 
 * 
 * 
 * Note:
 * 
 * You may use one character in the keyboard more than once.
 * You may assume the input string will only contain letters of alphabet.
 * 
 * 
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = words => words.filter(e=>isInOneRow(e))

const isInOneRow = word => {
  // string => bool
  
  let temp = [...word].map(e=>e.toLowerCase())
  if (temp.every(e=> 'asdfghjkl'.includes(e))
    ||temp.every(e=>'zxcvbnm'.includes(e))
    ||temp.every(e=>'qwertyuiop'.includes(e)))
    {
    return true
  } 
  return false
}
