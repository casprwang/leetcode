class Solution:
    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """

        cnt = 0

        def traverse(i, j):
            nonlocal grid

            if grid[i][j] == 0:
                return 0

            # make it 0
            grid[i][j] = 0

            ret = 0
            # up
            if i > 0:
                ret += traverse(i-1, j)

            # right
            if j > 0:
                ret += traverse(i, j-1)

            # down
            if i < len(grid) - 1:
                ret += traverse(i+1, j)

            # left
            if j < len(grid[0]) - 1:
                ret += traverse(i, j+1)

            return ret + 1

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j]:
                    area = traverse(i, j)
                    cnt = max(cnt, area)

        return cnt
