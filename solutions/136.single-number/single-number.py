class Solution:
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        ret = nums[0]
        for n in nums[1:]:
            ret = ret ^ n
            
        return ret
            
            