# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):


class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
            *
        0 0 1 1
        1 2 3 4
        0 1 2 3
        l m   r
        """

        l = 0
        r = n - 1

        while l <= r:
            m = int((l + r)/2)

            if not isBadVersion(m):
                # good version
                l = m + 1
            else:
                # bad version
                r = m - 1

        return l
