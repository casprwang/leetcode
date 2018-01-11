/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let afterBuySecond = -Infinity 
  let afterSellSecond = 0 
  let afterBuyFirst = -Infinity 
  let afterSellFirst = 0 

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i]

    afterSellSecond = Math.max(afterSellSecond, afterBuySecond + price)
    afterBuySecond = Math.max(afterBuySecond, afterSellFirst - price)

    afterSellFirst = Math.max(afterSellFirst, afterBuyFirst + price)
    afterBuyFirst = Math.max(afterBuyFirst, -price)
  }

  return afterSellSecond
}