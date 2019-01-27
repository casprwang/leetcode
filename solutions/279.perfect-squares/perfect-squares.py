class Solution:
    def numSquares(self, n):
        """
        :type n: int
        :rtype: int
        """
        # bfs
        i = 1
        parts = []

        while i ** 2 <= n:
            parts.append(i ** 2)
            i += 1

        cnt = 0
        to_check = {n}

        while to_check:
            cnt += 1
            tmp = set()

            for x in to_check:
                for y in parts:
                    if x == y:
                        return cnt
                    if x < y:
                        break

                    tmp.add(x - y)
                to_check = tmp
                
        return cnt