class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        s = set()
        ret = [None, None]
        for i, n in enumerate(nums):
            if n in s:
                ret[1] = i
                ret[0] = nums.index(target - n)
                break
            s.add(target - n)
            
        return ret