from copy import deepcopy


class Solution:
    def gameOfLife(self, board):
        """
        :type board: List[List[int]]
        :rtype: void Do not return anything, modify board in-place instead.
        """
        copy = deepcopy(board)

        for i in range(len(copy)):
            for j in range(len(copy[0])):
                cnt = 0

                # left
                if j > 0:
                    cnt += copy[i][j-1]

                # right
                if j < len(copy[0])-1:
                    cnt += copy[i][j+1]
                # up

                if i > 0:
                    cnt += copy[i-1][j]

                # down
                if i < len(copy)-1:
                    cnt += copy[i+1][j]

                # left up
                if i > 0 and j > 0:
                    cnt += copy[i-1][j-1]
                # left down i++
                if j > 0 and i < len(copy)-1:
                    cnt += copy[i+1][j-1]

                # right up
                if j < len(copy[0]) - 1 and i > 0:
                    cnt += copy[i-1][j+1]
                # right down
                if j < len(copy[0]) - 1 and i < len(copy) - 1:
                    cnt += copy[i+1][j+1]

                if board[i][j]:
                    if cnt < 2:
                        board[i][j] = 0
                    elif cnt is 3 or cnt is 2:
                        board[i][j] = board[i][j]
                    else:
                        board[i][j] = 0
                else:
                    if cnt == 3:
                        board[i][j] = 1
                    else:
                        board[i][j] = 0
