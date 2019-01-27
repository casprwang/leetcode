class Solution:
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        cnt = 0
        visited = [0] * len(s)
        checked = set()

        def traverse(pos):
            nonlocal s, cnt, checked
            if pos > len(s) - 1:
                return

            if visited[pos]:
                return
            visited[pos] = 1

            for i in range(pos+1, len(s) + 1):
                sub = s[pos:i]
                if sub in checked:
                    cnt += 1
                elif self.is_pali(sub):
                    checked.add(sub)
                    cnt += 1
                traverse(i)

        traverse(0)

        return cnt

    def is_pali(self, s):
        p1 = 0
        p2 = len(s) - 1

        while p1 < p2:
            if s[p1] != s[p2]:
                return False

            p1 += 1
            p2 -= 1

        return True
