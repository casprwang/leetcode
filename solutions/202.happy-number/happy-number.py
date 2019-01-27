class Solution(object):
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        s = set()
        while n is not 1:
            cur = self.cal(n)
            if cur in s:
                return False

            s.add(cur)
            n = cur

        return True

    def cal(self, n):
        if n < 10:
            return n ** 2

        ret = 0
        while n is not 0:
            cur = n % 10
            ret += cur ** 2
            n = int(n / 10)

        return ret
