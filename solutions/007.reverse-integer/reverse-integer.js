/**
 * @param {number} x
 * @return {number}
 */
const reverse = x =>  {
  let result =
    x > -1
      ? parseInt(x.toString().split('').reverse().join(''))
      : -parseInt(x.toString().split('').reverse().join(''))
  return Math.abs(result) < 2 ** 31 ? result : 0
}
