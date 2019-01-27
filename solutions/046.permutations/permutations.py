class Solution:
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]

        bfs with visited flags
        """
        ret = []

        def bfs(temp, visited=[0]*len(nums)):
            nonlocal ret

            if len(temp) == len(visited):
                ret.append(temp)

            for i, v in enumerate(visited):
                if v:
                    continue

                visited[i] = 1
                bfs(temp + [nums[i]], visited)
                visited[i] = 0

        bfs([])
        return ret
