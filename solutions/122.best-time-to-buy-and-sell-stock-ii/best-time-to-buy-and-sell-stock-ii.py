class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if not prices:
            return 0

        profit= 0
        cur_profit = 0

        low = prices[0]
        for i in range(len(prices)):
            print(cur_profit)
            if i == 0:
                continue

            if prices[i] > prices[i - 1]:
                # increase cur profile by holding
                cur_profit += prices[i] - prices[i - 1]
            else:
                profit += cur_profit
                cur_profit = 0
                # down, buy and set new low
                low = prices[i]

        if cur_profit:
            profit += cur_profit

        return profit
