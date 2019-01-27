class Solution:
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        [1]
           [1]

        1 1
          1 1
        """
        ret = [1]
        for i in range(rowIndex):
            first = [0] + ret
            second = ret + [0]
            for i, n in enumerate(first):
                first[i] = first[i] + second[i]
            ret = first
        return ret
