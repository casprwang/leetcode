/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = arr =>
  arr.reduce(
    (acc, cur) => {
      if (cur<= acc.low) {acc.low = cur}
      if (cur - acc.low> acc.profit) {acc.profit = cur - acc.low}
      return acc
    },
    {profit: 0, low: arr[0]}
  ).profit