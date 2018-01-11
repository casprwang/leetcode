/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = n => {
  let arr = [1]

  let p1 = 0
  let p2 = 0
  let p3 = 0

  for (let i = 1; i < n; i++) {
    let next = Math.min(arr[p1] * 2, arr[p2] * 3, arr[p3] * 5)
    arr[i] = next

    if (next === arr[p1] * 2) p1++
    if (next === arr[p2] * 3) p2++
    if (next === arr[p3] * 5) p3++
  }

  return arr[arr.length - 1]
}