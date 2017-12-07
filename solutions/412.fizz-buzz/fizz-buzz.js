/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = n => {
  let res = Array(n)
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        res[i - 1] = "FizzBuzz"
      } else res[i - 1] = "Fizz"
    } else if (i % 5 === 0) {
      res[i - 1] = "Buzz"
    } else {
      res[i - 1] = String(i)
    }
  }
  return res
}

