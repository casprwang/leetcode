class Solution:
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        actual_len = len(nums) + 1
        s = actual_len * (actual_len - 1) / 2

        return int(s - sum(nums))
