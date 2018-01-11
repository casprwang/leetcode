/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  const res = []

  const bfs = (temp, left, right) => {
    if (temp.length === n * 2) {
      res.push(temp)
      return
    }

    if (left < n) {
      bfs(temp + '(', left + 1, right)
    }
    if (right < left) {
      bfs(temp + ')', left, right + 1)
    }
  }

  bfs('', 0, 0)

  return res
};