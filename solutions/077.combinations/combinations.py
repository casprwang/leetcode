class Solution:
    def combine(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: List[List[int]]
        1 2 3 4
        |
        pos 0
        left 2

        for range(0, 4)
        n 4
        [1]  pos 0 left 1
        [2]  pos 1 left 1
        [3]  pos 2 left 1
        [4]  pos 3 left 1
        """
        ret = []

        def helper(temp, pos, left):
            nonlocal ret, n
            if left == 0:
                ret.append(temp)
                return
                
            for i in range(pos, n):

                helper(temp + [i + 1], i + 1, left - 1)

        helper([], 0, k)

        return ret