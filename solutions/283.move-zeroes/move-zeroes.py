class Solution:
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        0 1 0 3 2
        | |
        1 0 0 2
        | |
          | | 2
          |   |
        1 2 0 0
        swap
        p1 += 1

        p2 += 1

        1 0 0 3 2
          | |
        two zeros
        p2 += 1

        1 0 0 3 2
          |   |




        1 2 3 4 5
        | |
        """
        if len(nums) < 2:
            pass
        else:

            p1 = 0
            p2 = 1

            while p1 < len(nums) and p2 < len(nums):
                slow = nums[p1]
                fast = nums[p2]
                # p1 is 0, p2 is not 0
                if slow is 0 and fast is not 0:
                    temp = nums[p2]
                    nums[p2] = nums[p1]
                    nums[p1] = temp
                    p1 += 1
                    p2 += 1
                    continue

                if slow is not 0 and fast is not 0:
                    p1 += 1
                    p2 += 1
                    continue

                if slow is 0 and fast is 0:
                    p2 += 1
                    continue

                if slow is not 0 and fast is 0:
                    p1 += 1
                    continue
