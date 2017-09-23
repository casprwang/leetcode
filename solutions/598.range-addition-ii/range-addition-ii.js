/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = (m, n, ops) => {
  if (!ops.length) return m*n
  return Math.min(...ops.map(e=>e[0]), m) * Math.min(...ops.map(e=>e[1]))
}