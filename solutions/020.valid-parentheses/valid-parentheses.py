class Solution:
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        pairs = {
            ')': '(',
            ']': '[',
            '}': '{',
        }

        stack = []

        for c in s:
            if c in pairs:
                if stack and stack[-1] == pairs[c]:
                    stack.pop()
                else:
                    stack.append(c)
            else:
                stack.append(c)

        return not bool(stack)
