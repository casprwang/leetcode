/**
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = numRows => {
  let res = []
  for (let i = 0; i < numRows; i++) {
    if (i & 1) {
      let arr = new Array((i + 1) / 2)
      for (let j = 0; j <arr.length ; j++) {
        if (j === 0) arr[j] = 1
        else {
          arr[j] = res[i - 1][j-1] + res[i - 1][j]
        }
      }
      // i is odd
      let refined = [...arr, ...arr.reverse()]
      res.push(refined)
    } else {
      let arr = new Array((i + 2) / 2)
      for (let j = 0; j < arr.length; j++) {
        if (j === 0) arr[j] = 1
        else {
          arr[j] = res[i - 1][j - 1] + res[i - 1][j]
        }
      }
      let middle = arr.pop()
      let refined = [...arr, middle, ...arr.reverse()]
      res.push(refined)
    }
  }

  return res
}