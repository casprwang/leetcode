/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  let res = ''
  let p1 = num1.length - 1
  let p2 = num2.length - 1

  let carrier = 0
  while (num1[p1] !== undefined || num2[p2] !== undefined) {
    let n1 = num1[p1] || 0
    let n2 = num2[p2] || 0

    let sum = carrier + Number(n1) + Number(n2)
    if (sum > 9) {
      carrier = 1
      res = sum % 10 + res
    } else {
      carrier = 0
      res = sum + res
    }

    p1--
    p2--
  }

  if (carrier) {
    res = 1 + res
  }

  return res
}
