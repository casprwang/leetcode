class Solution:
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if all(x < 0 for x in nums):
            return max(nums)

        ret = 0
        cur_sum= 0

        for n in nums:
            if n + cur_sum < 0:
                cur_sum = 0
            else:
                cur_sum = n + cur_sum

            ret = max(cur_sum, ret)

        return ret
