/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  let pro = nums.reduce((acc, e) => {
    return acc * e
  }, 1)

  let res = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) res.push(pro / nums[i])
    else res.push(cal(nums, i))
  }

  return res
}

const cal = (arr, i) => {
  return arr.reduce((acc, e, j) => {
    if (j !== i) return acc * e
    return acc
  }, 1)
}
