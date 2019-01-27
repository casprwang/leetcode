class Solution:
    def decodeString(self, s):
        """
        :type s: str
        :rtype: str
        4324[123[afjaskfjak]]
        """
        stack = ['']

        for c in s:
            if c.isdigit():
                if stack[-1].isdigit():
                    stack[-1] += c
                else:
                    stack.append(c)
            elif c is '[':
                stack.append('')
            elif c is ']':
                cur = stack.pop()
                cnt = stack.pop()
                stack[-1] += int(cnt) * cur
            else:
                stack[-1] += c

        return stack[-1]
