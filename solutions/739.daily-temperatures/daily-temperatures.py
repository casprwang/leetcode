class Solution(object):
    def dailyTemperatures(self, T):
        """
        :type T: List[int]
        :rtype: List[int]
        """
        stack = []
        ret = [0] * len(T)

        for i, n in enumerate(T):
            if not stack:
                stack.append(i)
                continue

            while stack and n > T[stack[-1]]:
                tmp = stack.pop()
                ret[tmp] = i - tmp

            stack.append(i)

        return ret
