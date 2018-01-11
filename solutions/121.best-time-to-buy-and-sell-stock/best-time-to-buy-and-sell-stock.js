/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {

  let dp = [0] // profit
  let low = prices[0]

  for (let i = 1; i < prices.length; i++) {
    let price = prices[i]

    dp[i] = Math.max(dp[i - 1], price - low)
    low = Math.min(low, price)
  }

  return dp.pop()
}