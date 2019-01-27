class Solution:
    def reverseString(self, s):
        """
        :type s: str
        :rtype: str
        """
        return ''.join(list(s)[::-1])
