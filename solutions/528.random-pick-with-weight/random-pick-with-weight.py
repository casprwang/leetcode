import random


class Solution:

    def __init__(self, w):
        """
        :type w: List[int]
        """
        self.ref = []
        self.sum = sum(w)

        cur = 0
        for e in w:
            cur += e
            self.ref.append(cur)

    def pickIndex(self):
        """
        :rtype: int
        """
        sed = random.randint(1, self.sum)

        l = 0
        r = len(self.ref) - 1

        while l <= r:
            m = (l + r) // 2

            if sed <= self.ref[m]:
                r = m - 1
            else:
                l = m + 1

        return l


# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()
