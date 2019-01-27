class Solution:
    def flipAndInvertImage(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        for row in A:
            row.reverse()

            for i in range(len(row)):
                if row[i] == 0:
                    row[i] = 1
                else:
                    row[i] = 0

        return A
