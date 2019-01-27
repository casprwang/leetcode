class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()

        ret = []

        for i in range(len(nums)):
            if i >= len(nums) - 2:
                break

            if i > 0 and nums[i] == nums[i-1]:
                continue

            l = i + 1
            r = len(nums) - 1

            while r > l:
                s = nums[i] + nums[r] + nums[l]
                if s > 0:
                    r -= 1
                elif s < 0:
                    l += 1
                else:
                    ret.append([nums[i], nums[l], nums[r]])
                    while l < r and nums[l] == nums[l + 1]:
                        l += 1
                    while l < r and nums[r] == nums[r - 1]:
                        r -= 1

                    r -= 1
                    l += 1

        return ret
