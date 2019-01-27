class Solution:
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        p1 = 0
        p2 = 0

        cnt = 0
        ret = 0
        zeros = 0

        while p1 <= p2 and p1 < len(nums) and p2 < len(nums):
            while zeros < 2 and p2 < len(nums):
                if nums[p2] == 0:
                    zeros += 1
                p2 += 1


            if p2 >= len(nums):
                if zeros == 2:
                    cnt = p2 - p1 - 1
                else:
                    cnt = p2 - p1
                ret = max(cnt, ret)
                break

            cnt = p2 - p1 - 1
            ret = max(cnt, ret)

            while zeros == 2:
                if nums[p1] == 0:
                    zeros -= 1
                p1 += 1

        return ret










        # last_zero = -1
        # cur = 0
        # ret = 0

        # for i in range(len(nums)):
        #     if nums[i] == 1:
        #         cur += 1
        #     else:
        #         ret = max(ret, cur)
        #         cur = i - last_zero
        #         last_zero = i

        # return max(ret, cur)
