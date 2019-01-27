class Solution(object):
    def findPeakElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.insert(0, float('-inf'))
        nums.append(float('-inf'))

        for i in range(len(nums)):
            if i == 0 or i == len(nums) - 1:
                continue

            if nums[i-1] < nums[i] and nums[i + 1] < nums[i]:
                return i - 1
