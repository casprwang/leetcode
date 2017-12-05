/**
 * @param {number} n
 * @return {number}
 */
// // First approach - Built-in base conversion.
// var newInteger = function(n) {
//   return parseInt(n.toString(9), 10)
// }

// // Third approach - Intermediate result is string.
// var newInteger = function(n) {
//   let res = ''
//   while (n > 0) {
//     res = n % 9 + res
//     n = Math.floor(n / 9)
//   }
//   return parseInt(res, 10)
// }

const newInteger = n => {
  let pow = 0
  let res = 0

  while (n > 0) {
    res += Math.pow(10, pow) * (n % 9)
    pow++
    n = Math.floor(n / 9)
  }
  return res
}
