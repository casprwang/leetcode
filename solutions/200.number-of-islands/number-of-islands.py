class Solution(object):
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        ret = 0

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                cur = grid[i][j]

                if cur == '0':
                    continue
                else:
                    ret += 1
                    self.traverse(i, j, grid)
        return ret

    def traverse(self, i, j, grid):
        if i < 0 or j < 0 or \
                i >= len(grid) or j >= len(grid[0]):
            return

        if grid[i][j] == '0':
            return

        grid[i][j] = '0'

        self.traverse(i, j+1, grid)
        self.traverse(i, j-1, grid)
        self.traverse(i+1, j, grid)
        self.traverse(i-1, j, grid)
