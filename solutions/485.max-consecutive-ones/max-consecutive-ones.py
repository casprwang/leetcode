class Solution:
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        ret = 0
        cnt = 0
        for n in nums:
            if n is 1:
                cnt += 1
                ret = max(cnt, ret)
            else:
                cnt = 0

        return ret
