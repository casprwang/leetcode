class Solution:
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n is 1:
            return 1
        
        if n is 2:
            return 2

        # dp
        dp = [0] * n
        dp[0] = 1
        dp[1] = 2

        for i in range(n):
            if i < 2:
                continue
            dp[i] = dp[i-1] + dp[i-2]
            
        print(dp)
            
        return dp[-1]
