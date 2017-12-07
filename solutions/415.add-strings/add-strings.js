/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
  let [i, j] = [num1.length - 1, num2.length - 1]
  let ans = ""
  let add = 0

  for (; i >= 0 || j >= 0; i--, j--) {
    let a = i >= 0 ? +num1[i] : 0
    let b = j >= 0 ? +num2[j] : 0
    let sum = a + b + add
    ans = sum % 10 + ans
    add = ~~(sum / 10)
  }

  add && (ans = add + ans)
  return ans
}
