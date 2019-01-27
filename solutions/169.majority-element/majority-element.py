class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        target = len(nums) / 2
        m = {}
        for n in nums:
            m[n] = m.get(n, 0) + 1
            if m[n] > target:
                return n