class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if not prices:
            return 0

        low = prices[0]
        high = prices[0]

        ret = 0

        for p in prices[1:]:
            if p <= low:
                # find lower, cal cur profit
                low = p
                high = p
            else:
                # find higher, set new higher
                high = p
                ret = max(ret, high - low)

        return ret
