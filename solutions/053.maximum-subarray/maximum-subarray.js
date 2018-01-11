/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let len = nums.length

  let dp = [nums[0]]

  for (let i = 1; i < len; i++) {
    let num = nums[i]

    if (dp[i - 1] > 0) {
      dp[i] = num + dp[i - 1]
    } else {
      dp[i] = num
    }
  }

  return Math.max(...dp)
}