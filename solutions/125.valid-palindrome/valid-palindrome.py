class Solution:
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        p1 = 0
        p2 = len(s) - 1

        while p1 < p2:
            left = s[p1]
            right = s[p2]

            if not left.isalnum():
                p1 += 1
                continue

            if not right.isalnum():
                p2 -= 1
                continue

            if left.lower() != right.lower():
                return False

            p1 += 1
            p2 -= 1

        return True
