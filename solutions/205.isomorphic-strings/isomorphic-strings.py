class Solution:
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        return self.traslate(s) == self.traslate(t)

    def traslate(self, s):
        cur = 0
        stack = []
        m = {}

        for c in s:
            if c in m:
                stack.append(m[c])
            else:
                cur += 1
                m[c] = cur
                stack.append(cur)

        return stack
