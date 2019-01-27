class Solution:
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        if numRows == 0:
            return []
        
        ret = [[1]]
        row = [1]

        for i in range(1, numRows):
            left = [0] + row
            right = row + [0]
            for i in range(len(left)):
                left[i] = left[i] + right[i]

            row = left
            ret.append(row)

        return ret
