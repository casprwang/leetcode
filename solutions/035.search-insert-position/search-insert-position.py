class Solution:
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        l = 0
        r = len(nums) - 1

        while l <= r:
            m = (l + r) // 2

            if nums[m] > target:
                # move r to m - 1
                r = m - 1
            elif nums[m] < target:
                l = m + 1
            else:
                return m

        return l
