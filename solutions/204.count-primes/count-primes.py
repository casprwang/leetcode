class Solution(object):
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        0 0 0 0 0
        0 1 2 3 1
        """
        not_primie = [0]*n
        count = 0
        for i in range(2, n):
            j = 2

            if not_primie[i] == 0:
                count += 1

            while i*j < n:
                not_primie[i*j] = 1
                j += 1

        return count
