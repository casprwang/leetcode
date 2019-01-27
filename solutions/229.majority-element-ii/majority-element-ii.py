class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        nums.sort()
        target = len(nums) // 3

        ret = []

        last = None
        for i in range(len(nums)):
            if last == nums[i]:
                continue

            if i + target >= len(nums):
                break

            if nums[i + target] == nums[i]:
                ret.append(nums[i])
                last = nums[i]

        return ret
