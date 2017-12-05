/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = (A, B) => {
  let safeNumber = ~~(B.length / A.length) + 2
  if (A.repeat(safeNumber - 2).includes(B)) return safeNumber - 2
  if (A.repeat(safeNumber - 1).includes(B)) return safeNumber - 1
  if (A.repeat(safeNumber).includes(B)) return safeNumber
  return -1
}
