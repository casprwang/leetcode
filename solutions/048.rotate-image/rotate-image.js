/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = matrix => {
  let len = matrix.length

  matrix.reverse()

  for (let i =0; i< len; i++) {
    for(let j = i+1; j<len; j++) {
      swap(matrix, i, j)
    }
  }
}

const swap = (arr, i,j) => {
  ;[arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]
}