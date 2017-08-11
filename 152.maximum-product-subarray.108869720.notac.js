/*
 * [152] Maximum Product Subarray
 *
 * https://leetcode.com/problems/maximum-product-subarray
 *
 * algorithms
 * Medium (25.54%)
 * Total Accepted:    103.8K
 * Total Submissions: 406.6K
 * Testcase Example:  '[-2]'
 *
 * 
 * Find the contiguous subarray within an array (containing at least one
 * number) which has the largest product.
 * 
 * 
 * 
 * For example, given the array [2,3,-2,4],
 * the contiguous subarray [2,3] has the largest product = 6.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

function isEven(n) {
  return n % 2 == 0
}

function findLastOddNeg(arr) {
  let count = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count.push(i)
  }
  if (isEven(count.length)) {
    return count[count.length - 2]
  } else {
    return count.pop()
  }
}

function maxProduct(arr) {
  if (arr.length <= 2) {
    if (arr[0] * arr[1] > 0) return arr[0] * arr[1]
    return Number(Math.max(...arr))
  } else {
    let pros = []
    for (let i in arr) {
      let sub = arr.slice(i, arr.length)
      let pos
      if (arr[i] < 0) {
        pos = findLastOddNeg(sub)
        sub = sub.slice(i, pos)
      }
      if (pos === 0) continue
      pros.push(sub.reduce((pre, cur) => pre * cur, 1))
    }

    return Math.max(...pros)
  }
}
