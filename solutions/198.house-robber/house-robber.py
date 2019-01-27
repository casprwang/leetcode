class Solution:
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 0:
            return 0

        if len(nums) < 3:
            return max(nums)

        dp = nums
        # dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

        for i, n in enumerate(nums):
            if i == 0:
                continue
            if i == 1:
                dp[i] = max(dp[0], dp[1])
                continue
            dp[i] = max(dp[i-1], dp[i - 2] + n)

        print(dp)
        return dp[-1]
