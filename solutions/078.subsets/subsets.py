class Solution:
    def subsets(self, nums):
        ret = []
        nums.sort()

        def traverse(pos, tmp):
            nonlocal ret

            ret.append(tmp)

            for i in range(pos, len(nums)):
                traverse(i + 1, tmp + [nums[i]])

        traverse(0, [])

        return ret
