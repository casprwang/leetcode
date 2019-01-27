class Solution:
    def subsetsWithDup(self, nums):
        ret = []
        nums.sort()

        def traverse(pos, tmp):
            nonlocal nums, ret

            ret.append(tmp)

            for i in range(pos, len(nums)):
                if i > pos and nums[i-1] == nums[i]:
                    continue

                traverse(i + 1, tmp + [nums[i]])


        traverse(0, [])
        return ret
