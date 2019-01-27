class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        ret = ''
        li = s.split(' ')

        for i in range(len(li) - 1, -1, -1):
            if not li[i]:
                continue

            ret += li[i]
            ret += ' '

        return ret.strip()
