/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (matrix, k) => {
  let arr = []

  for (let i = 0; i < matrix.length; i++) {
    arr = [...arr, ...matrix[i]]
  }

  arr.sort((a,b)=>a-b)

  return arr[k - 1]
}
