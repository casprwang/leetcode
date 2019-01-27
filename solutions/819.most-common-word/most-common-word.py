import re


class Solution:
    def mostCommonWord(self, paragraph, banned):
        """
        :type paragraph: str
        :type banned: List[str]
        :rtype: str
        """
        m = {}

        for w in re.findall(r'\w+', paragraph):
            m[w.lower()] = m.get(w.lower(), 0) + 1

        ret = ''
        high = float('-inf')

        for w, cnt in m.items():
            if w in banned:
                continue

            if cnt > high:
                ret = w
                high = cnt

        return ret
