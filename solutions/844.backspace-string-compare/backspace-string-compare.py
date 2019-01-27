class Solution:
    def backspaceCompare(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: bool
        """
        c1 = ''
        cnt = 0
        for i in range(len(S)-1, -1, -1):
            if S[i] == '#':
                cnt += 1
                continue

            if not cnt:
                c1 += S[i]
            else:
                cnt -= 1

        c2 = ''
        cnt = 0

        for i in range(len(T)-1, -1, -1):
            if T[i] == '#':
                cnt += 1
                continue

            if not cnt:
                c2 += T[i]
            else:
                cnt -= 1


        return c1 == c2
