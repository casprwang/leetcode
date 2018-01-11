/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = (a, b) => {
  // aba ,   abca
  let res = Math.max(a.length, b.length)
  return a===b? -1: res
}