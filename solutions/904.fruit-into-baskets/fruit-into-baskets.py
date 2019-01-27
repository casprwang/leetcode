from collections import deque


class Solution(object):
    def totalFruit(self, tree):
        """
        :type tree: List[int]
        :rtype: int
        """

        m = {}
        p1 = 0
        p2 = 0
        ret = 0

        while p1 < len(tree) and p2 < len(tree):
            c1 = tree[p1]
            c2 = tree[p2]
            m[c2] = m.get(c2, 0) + 1

            if len(m) > 2:
                m[c1] -= 1
                if m[c1] == 0: del m[c1]
                p1 += 1

            ret = max(ret, p2 - p1 + 1)
            p2 += 1

        return ret
