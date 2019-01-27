class Solution:
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        ret = []

        def compose(temp, left, right):
            nonlocal ret
            if left > right:
                return

            if left < 0:
                return
            if right < 0:
                return

            if not left and not right:
                ret.append(temp)
                return

            compose(temp + '(', left - 1, right)
            compose(temp + ')', left, right - 1)

        compose('', n, n)
        return ret
