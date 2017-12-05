/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const sortTransformedArray = (nums, a, b, c) => {
  let arr = []

  for (let i = 0; i < nums.length; i++) {
    arr.push(cal(nums[i], a, b, c))
  }

  return arr.sort((a,b)=>a-b)
}

const cal = (x, a, b, c) => a * x ** 2 + b * x + c
// time: n; space: n