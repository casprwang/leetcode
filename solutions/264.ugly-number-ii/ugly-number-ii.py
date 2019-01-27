class Solution:
    def nthUglyNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        ugly = [1]
        i2 = 0
        i3 = 0
        i5 = 0

        while n > 1:
            c2 = ugly[i2] * 2
            c3 = ugly[i3] * 3
            c5 = ugly[i5] * 5

            min_c = min(c2, c3, c5)

            if min_c == c2:
                i2 += 1

            if min_c == c3:
                i3 += 1

            if min_c == c5:
                i5 += 1

            ugly.append(min_c)
            n -= 1

        return ugly[-1]
