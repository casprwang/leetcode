class Solution:
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: void Do not return anything, modify matrix in-place instead.

        we want to flip the matrix by two steps
        1. flip vertically
        2. flip diagonally
        """
        if not matrix:
            return matrix

        p1 = 0
        p2 = len(matrix) - 1

        while p1 < p2:
            matrix[p1], matrix[p2] = matrix[p2], matrix[p1]

            p1 += 1
            p2 -= 1

        for i in range(len(matrix)):
            for j in range(0, i + 1):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
