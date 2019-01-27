class Solution:
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        i = 0

        while i ** 2 < num:
            i += 1
        return i ** 2 == num
