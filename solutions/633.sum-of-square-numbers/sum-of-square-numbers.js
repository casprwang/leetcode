/**
 * @param {number} c
 * @return {boolean}
 */
// const judgeSquareSum = c => {
//   let set = new Set()

//   for (let i = 0; i <= Math.sqrt(c); i++) {
//     set.add(i ** 2)
//     if (set.has(c - i ** 2)) {
//       return true
//     }
//   }

//   return false
// }

const judgeSquareSum = c => {
  for (let i = 0; i <= Math.sqrt(c); i++) {
    if (Number.isInteger(Math.sqrt(c - i ** 2))) return true
  }
  return false
}