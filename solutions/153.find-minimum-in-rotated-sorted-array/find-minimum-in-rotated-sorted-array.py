class Solution:
    def findMin(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        [4,5,6,7,0,1,2]
         l   m       r

        1 2 3 4 5 0
            l m   r
                lm r


        [3,4,5,1,2]
               l r

        3 1 2
        l m r
        """
        l = 0
        r = len(nums) - 1

        while l < r:
            m = l + (r - l) // 2

            if nums[m] > nums[r]:
                l = m + 1
            else:
                r = m

        return nums[r]
