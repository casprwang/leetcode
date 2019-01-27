class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        c[i][j] = c[i -1]c[j] + c[i][j-1]
        """
        # init
        grid = []
        for i in range(m):
            grid.append([0] * n)

        grid[0][0] = 1

        for i in range(m):
            for j in range(n):
                if i == 0 and j == 0:
                    continue
                grid[i][j] = grid[i-1][j] + grid[i][j-1]

        return grid[-1][-1]
