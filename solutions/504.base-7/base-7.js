/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = num => {
  if (num === 0) return '0'

  let sign = String(num)[0] === '-' ? '-' : ''

  num = Math.abs(num)

  let ans = []

  while (num) {
    ans.push(num % 7)
    num = ~~(num / 7)
  }

  return sign + ans.reverse().join('')
}