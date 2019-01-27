class Solution:
    def wordBreak(self, s, wordDict):
        """
        :type s: str
        :type wordDict: List[str]
        :rtype: bool
        """
        # iterative
        visited = [0] * (len(s) + 1)
        stack = [0]

        while stack:
            cur = stack.pop()
            print(cur)
            if visited[cur] or cur > len(s) + 1:
                continue
            visited[cur] = 1
            if cur == len(s):
                return True

            for w in wordDict:
                if s[cur:].startswith(w):
                    stack.append(cur + len(w))

        return False

        # recursive
        # ret = False
        # visited = set()

        # def traverse(pos):
        #     nonlocal wordDict, visited

        #     if pos in visited:
        #         return
        #     visited.add(pos)

        #     if pos == len(s):
        #         ret = True

        #     if pos >= len(s):
        #         return

        #     for w in wordDict:
        #         cur = s[pos:]
        #         if w in cur and cur.index(w) == 0:
        #             traverse(pos + len(w))

        # traverse(0)

        # return ret
