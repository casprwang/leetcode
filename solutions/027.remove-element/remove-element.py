class Solution:
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        ret = []

        for n in nums:
            if n != val:
                ret.append(n)

        for i in range(len(ret)):
            nums[i] = ret[i]

        return len(ret)
