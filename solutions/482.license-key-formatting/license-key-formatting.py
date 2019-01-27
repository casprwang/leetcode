class Solution:
    def licenseKeyFormatting(self, S, K):
        """
        :type S: str
        :type K: int
        :rtype: str
        """
        cnt = 0
        ret = ''
        for s in S[::-1]:
            if s == '-':
                continue

            if cnt == K:
                ret = s.upper() + '-' + ret
                cnt = 1
            else:
                ret = s.upper() + ret
                cnt += 1

        return ret
