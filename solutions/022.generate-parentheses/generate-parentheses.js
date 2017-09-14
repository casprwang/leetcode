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