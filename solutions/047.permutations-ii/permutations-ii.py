class Solution:
    def permuteUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()
        ret = []

        def traverse(tmp, visited):
            nonlocal nums, ret

            if sum(visited) == len(visited):
                ret.append(tmp)

            for i in range(len(visited)):

                if visited[i]:
                    continue

                if i > 0 and visited[i - 1] and nums[i] == nums[i - 1]:
                    continue

                visited[i] = 1
                traverse(tmp + [nums[i]], visited)
                visited[i] = 0

        traverse([], [0]*len(nums))

        return ret
