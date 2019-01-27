class Solution:
    def isUgly(self, num):
        """
        :type num: int
        :rtype: bool
        """
        for n in 5, 3, 2:
            while num % n == 0 and num:
                num /= n
                
        return num == 1
