class Solution:
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) != len(t):
            return False

        m = {}

        for c in s:
            m[c] = m.get(c, 0) + 1


        for c in t:
            if not c in m:
                return False

            m[c] = m.get(c) - 1


        for _, v in m.items():

            if v != 0:
                return False
   
        return True
