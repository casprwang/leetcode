/*
 * [122] Best Time to Buy and Sell Stock II
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 *
 * algorithms
 * Easy (46.95%)
 * Total Accepted:    150.9K
 * Total Submissions: 321.5K
 * Testcase Example:  '[]'
 *
 * Say you have an array for which the ith element is the price of a given
 * stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete as many
 * transactions as you like (ie, buy one and sell one share of the stock
 * multiple times). However, you may not engage in multiple transactions at the
 * same time (ie, you must sell the stock before you buy again).
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length)
    return 0;

  var buy = []
    , sell = [];

  prices.forEach(function(item, index) {
    if (!index) {
      buy[index] = -item;
      sell[index] = 0;
    } else {
      buy[index] = Math.max(buy[index - 1], sell[index - 1] - item);
      sell[index] = Math.max(sell[index - 1], buy[index - 1] + item);
    }
  });

  var len = prices.length;
  return sell[len - 1];
}
