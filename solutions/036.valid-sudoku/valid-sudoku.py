class Solution:
    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool


        00 01 02
        10 11 12
        20 21 22

        divide 3 : 0
        mod    3 : < 3
        m = {
            'row0-8' : set()
            'col0-8'
            'div3 + mod3'
        }
        """
        m = {}
        # row
        for i in range(9):
            for j in range(9):
                cur = board[i][j]
                if cur == '.':
                    continue

                sym_row = 'r' + str(i)
                if sym_row in m:
                    if cur in m[sym_row]:
                        return False
                    m[sym_row].add(cur)
                else:
                    m[sym_row] = set()
                    m[sym_row].add(cur)


                sym_col = 'c' + str(j)
                if sym_col in m:
                    if cur in m[sym_col]:
                        return False
                    m[sym_col].add(cur)
                else:
                    m[sym_col] = set()
                    m[sym_col].add(cur)


                sym_box = str(int(i/3)) + str(int(j/3))
                if sym_box in m:
                    if cur in m[sym_box]:
                        return False
                    m[sym_box].add(cur)
                else:
                    m[sym_box] = set()
                    m[sym_box].add(cur)


        return True
