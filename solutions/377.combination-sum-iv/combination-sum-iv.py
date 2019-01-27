from collections import deque


class Solution:
    def combinationSum4(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        nums.sort()
        memo = {}

        def dfs(left):
            if left in memo:
                return memo[left]

            cnt = 0
            for n in nums:
                if n > left:
                    break

                if n == left:
                    cnt += 1
                    break

                cnt += dfs(left - n)
            memo[left] = cnt
            return cnt

        return dfs(target)
