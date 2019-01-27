class Solution:
    def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
        while num > 9:
            s = str(num)
            next = 0

            for c in s:
                next += int(c)

            num = next

        return num
