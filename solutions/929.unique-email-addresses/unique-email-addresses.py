class Solution(object):
    def numUniqueEmails(self, emails):
        """
        :type emails: List[str]
        :rtype: int
        """
        prepared = []
        for e in emails:
            pre = e.split('@')[0]
            suf = e.split('@')[1]

            cur_str = ''
            for c in pre:
                if c == '.':
                    continue

                if c == '+':
                    break

                cur_str += c

            prepared.append(cur_str + '@' + suf)

        return len(set(prepared))
