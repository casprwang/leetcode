/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = nums => {
  return [...nums].sort((a, b) => a - b).reduce((acc, cur, ind) => {
    if (isOdd(ind)) return acc
    else return acc + cur
  })
}
const isOdd = num => {
  return num % 2 === 0 ? false : true
}